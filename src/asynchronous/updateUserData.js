import { auth, db } from "../firebase/config"
import { getUserDataAsync } from "./getUserDataAsync"

export const updateUserData = (
  docId,
  dataObject,
  toPage,
  setUserData
) => {
  db.collection("users").doc(docId).set(
    dataObject,
    { merge: true }
  )
    .then(() => {
      console.log(docId)
      console.log(dataObject)
      console.log("Great!!")
      auth.onAuthStateChanged((user) => {
        if (user) {
          getUserDataAsync(user.uid,setUserData)
          console.log("login?===============")
          console.log("yes!!!")
        } else {
          console.log("login?===============")
          console.log("no!!!")
        }
      });
      toPage(docId)
    })
    .catch((error) => {
      console.log("Error!!")
    })
}