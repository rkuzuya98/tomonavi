/* eslint-disable no-console */
import { db, FirebaseTimestamp } from "../firebase/config"

export const createComm = (
  uid,
  datas,
  toMgComm
  ) => {
  const timestamp = FirebaseTimestamp.now()
  const commsRef = db.collection("communities")
  commsRef.add({
    manager: uid,
    member: [uid],
    created_at: timestamp,
    updated_at: timestamp,
    // loading: false,
    favorite_users: [],
    favorite_number: 0,
    enrichment: 50,
    ...datas,
  })
  .then((docRef) => {
    console.log(docRef)
    console.log(docRef.id)
    commsRef.doc(docRef.id).set({
      id: docRef.id
    },{ merge: true })
    return docRef
  })
  .then((docRef) => {
    toMgComm(docRef.id)
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
}