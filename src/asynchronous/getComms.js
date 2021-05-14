/* eslint-disable no-nested-ternary */
import { db } from "../firebase/config"

export const getComms = async (
  setComms,
  order,
  currentTheme,
  currentPlace
) => {

  const theme = currentTheme
  const place = currentPlace
  
  const commsRef = db.collection("communities")
  
  const placeArr = []
  if (place === null) {
    await commsRef
    .orderBy(order,"desc")
    .get()
    .then((snapshot) => {
      snapshot.docs.map((doc) => {
        const docData = doc.data()
        placeArr.push(docData)
      })
    })
  } else {
    const fixedPlace = 
    place[place.length-1] === "県" && place.slice(0,-1) ||
    place[place.length-1] === "府" && place.slice(0,-1) ||
    place[place.length-1] === "都" && place.slice(0,-1) ||
    place;
    await commsRef
    .where("place","array-contains",fixedPlace)
    .orderBy(order,"desc")
    .get()
    .then((snapshot) => {
      snapshot.docs.map((doc) => {
        const docData = doc.data()
        placeArr.push(docData)
      })
    })
  }

  const themeArr = []
  if (theme === null) {
    await commsRef
    .orderBy(order,"desc")
    .get()
    .then((snapshot) => {
      snapshot.docs.map((doc) => {
        const docData = doc.data()
        themeArr.push(docData)
      })
    })
  } else {
    await commsRef
    .where("theme","array-contains",theme)
    .orderBy(order,"desc")
    .get()
    .then((snapshot) => {
      snapshot.docs.map((doc) => {
        const docData = doc.data()
        themeArr.push(docData)
      })
    })
  }

  // JSON形式（データ型を配列に変換し並び替える）
  const placeJSON = placeArr.map(item =>JSON.stringify(Object.entries(item).sort()))
  const themeJSON = themeArr.map(item =>JSON.stringify(Object.entries(item).sort()))

  // 絞り込み済みのコミュニティ（重複状態）
  const dualFilteredDatas = 
    [...placeArr,...themeArr].filter(item=>
      // 指定の開催場所に一致
      placeJSON.includes(JSON.stringify(Object.entries(item).sort())) &&
      // 指定の分野・テーマに一致
      themeJSON.includes(JSON.stringify(Object.entries(item).sort()))
    )
  // 絞り込み済みのコミュニティ（完成形）
  const filteredDatas = dualFilteredDatas.slice(dualFilteredDatas.length / 2)

  const finalThemeArr = [] 
  await Promise.all(
    themeArr.map(async (item) => {
      await db.collection("users").doc(item.manager).get()
        .then((doc) => {
          const docData = doc.data()
          // const newItem = {...item, ...docData}
          const newItem = {...item, ...{mgData: docData}}
          finalThemeArr.push(newItem)
        })
    })
  )

  const finalPlaceArr = [] 
  await Promise.all(
    placeArr.map(async (item) => {
      await db.collection("users").doc(item.manager).get()
        .then((doc) => {
          const docData = doc.data()
          // const newItem = {...item, ...docData}
          const newItem = {...item, ...{mgData: docData}}
          finalPlaceArr.push(newItem)
        })
    })
  )

  const finalDatas = [] 
  await Promise.all(
    filteredDatas.map(async (item) => {
      await db.collection("users").doc(item.manager).get()
        .then((doc) => {
          const docData = doc.data()
          const newItem = {...item, ...{mgData: docData}}
          finalDatas.push(newItem)
        })
    })
  )

  if (place === null) {
    setComms(finalThemeArr)
  } else if (theme === null) {
    setComms(finalPlaceArr)
  } else {
    setComms(finalDatas)
  }
}