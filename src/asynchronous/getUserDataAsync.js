import { db } from "../firebase/config"

export const getUserDataAsync = (uid,setUserData,setSigning) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  uid ?
  db.collection("users").doc(uid).get()
    .then((doc) => {
      setUserData(doc.data())
      setSigning(true)
    })
  :
  setUserData(null)
}