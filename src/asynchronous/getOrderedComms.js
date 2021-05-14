/* eslint-disable no-nested-ternary */
import { db, FirebaseTimestamp } from "../firebase/config"

export const getOrderedComms = (
  order
) => {
  console.log(order)
  const newOrder =
  order === "update" ?
  "favorite_number" :
  // "updated_at" :
  order === "favorite" ?
  "favorite_number" :
  order === "enrichment" ?
  "enrichment" :
  "favorite_number"


  const commsRef = db.collection("communities")
  commsRef.orderBy(newOrder,"desc").get()
    .then((snapshot) => {
      snapshot.docs.map((doc) => {
        const docData = doc.data()
        console.log(docData)
        const timestamp = FirebaseTimestamp.now()
        console.log(timestamp)
      })
    })
  console.log("this is getFavCommsAsync")
}