/* eslint-disable no-alert */
import { db } from "../firebase/config"

export const updateUsers = (
  docId,
  data,
  handleDisplay,
  setUserData
) => {
  db.collection("users").doc(docId).set(
    data,
    { merge: true }
  )
    .then(() => {
      db.collection("users").doc(docId).get()
      .then((doc) => {
        const docData = doc.data()
        setUserData(docData)
      })
      .then(() => {
        handleDisplay()
      })
    })
    .catch((error) => {
      alert("Error!!")
    })
}