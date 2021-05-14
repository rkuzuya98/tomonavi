import { db } from "../firebase/config"

export const getCommsAsync = async (setComms) => {
  const commuCollectionRef = db.collection("communities")
  commuCollectionRef.get()
    .then(async (snapshot) => {
      const newComms = []
      console.log("MAP START")
      await Promise.all(
        snapshot.docs.map(async (doc) => {
          const docData = doc.data()
          // await docData.mg.get()
          await db.collection("users").doc(docData.manager).get()
          .then((res) => {
            res.data()
            docData.mgData = res.data()
            // console.log(res.data())
            newComms.push(docData)
            console.log("MAP RUNNING")
          })
        })
      )
      console.log("MAP END")
      setComms(newComms)
    })
}