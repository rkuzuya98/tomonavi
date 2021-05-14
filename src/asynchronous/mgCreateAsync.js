import { db } from "../firebase/config";

export const mgCreateAsync = (
  uid,
  pushFunction,
  ) => {
    db.collection("managers").doc(uid).set({
      id: uid,
      username: "",
      community: []
    },{merge: true})
    .then((docRef) => {
      pushFunction(uid)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}