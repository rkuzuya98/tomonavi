import firebase from 'firebase/app'
// eslint-disable-next-line import/no-duplicates
import 'firebase/auth'
// eslint-disable-next-line import/no-duplicates
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyALheiz1Zo8oQ64jWKglg08OFYkr1TFouA",
  authDomain: "tomonavi.firebaseapp.com",
  projectId: "tomonavi",
  storageBucket: "tomonavi.appspot.com",
  messagingSenderId: "706109006975",
  appId: "1:706109006975:web:83c267ee9f6c980b00cb4a",
  measurementId: "G-K4HQB3CJD1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const FirebaseTimestamp = firebase.firestore.Timestamp;



firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });





// firebase.auth().onAuthStateChanged((user) => {
//   if (!user) {
//     // サインインしていない状態
//     // サインイン画面に遷移する等
//     // 例:
//     console.log('not login')
//   } else {
//     // サインイン済み
//     console.log('login yes!!')
//     console.log(user.uid)
//   }
// });