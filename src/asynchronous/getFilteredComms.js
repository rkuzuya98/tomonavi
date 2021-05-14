import { db } from "../firebase/config"

export const getFilteredComms = async (place,theme,setComms) => {

  // const fixedPlace = place[place.length-1] === ("県" || "府" || "都") && place.slice(0,-1);
  const fixedPlace = 
  place[place.length-1] === "県" && place.slice(0,-1) ||
  place[place.length-1] === "府" && place.slice(0,-1) ||
  place[place.length-1] === "都" && place.slice(0,-1) ||
  place;
  
  const commCollectionRef = db.collection("communities")
  
  const placeArr = []
  await commCollectionRef
    .where("place","array-contains",fixedPlace)
    // .where("place","array-contains",place)
    .get()
    .then((snapshot) => {
      snapshot.docs.map((doc) => {
        placeArr.push(doc.data())
      })
    })

  const themeArr = []
  await commCollectionRef
  .where("theme","array-contains",theme)
  .get()
  .then((snapshot) => {
    snapshot.docs.map((doc) => {
      themeArr.push(doc.data())
    })
  })

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


  if (place === null) {
    setComms(themeArr)
  } else if (theme === null) {
    setComms(placeArr)
  } else {
    setComms(filteredDatas)
  }
}