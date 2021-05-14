import { db } from "../firebase/config"

export const getCommAsync = (
  commId,
  setCommData,
  setLoading
  ) => {
  db.collection("communities").doc(commId).get()
    .then((doc) => {
      setLoading(false)
      if (doc.exists) {
        setCommData(doc.data())
      } else {
        setCommData(null)
      }
    })
}