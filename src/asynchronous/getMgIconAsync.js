import { db } from "../firebase/config"

export const getMgIconAsync = (docId) => {
  db.collection("users").doc(docId).get()
    .then((doc) => {
      const docData = doc.data()
      console.log(doc)
      console.log(docData)
      console.log(docData.icon)
      // return docData.icon
    })
}