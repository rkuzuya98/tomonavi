/* eslint-disable no-alert */
import { useHistory } from "react-router";
import { auth, db } from "../firebase/config";

export const singInAsync = (
  email,
  password,
  setUid,
  setUserData,
  toPage
  ) => {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const {...user} = userCredential.user
      setUid(user.uid)
      db.collection("users").doc(user.uid).get()
        .then((doc) => {
          if (doc.exists) {
              setUserData(doc.data())
              toPage(user.uid)
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      // console.log(errorCode)
      // alert(errorMessage)
      switch (errorCode) {

        case "auth/network-error":
          alert("ネットワークエラーが発生しました。再度お試しください。")
          break;
        case "auth/user-not-found":
          alert("アカウントが登録されていません。心当たりのない方はお手数ですがお問い合わせフォームよりご連絡ください。")
          break;
        case "auth/user-token-expired":
          alert("アカウントのトークンが期限切れになりました。再度ログインを行なって下さい。")
          break;
        case "auth/too-many-requests":
          alert("アクセス回数が上限に達しました。しばらくしてからもう一度お試しください。")
          break;
        case "auth/app-not-authorized":
          alert("原因不明のエラーが起きました。しばらくしてからもう一度お試しください。それでも解決されない場合はお手数ですがお問い合わせフォームよりご連絡ください。")
          break;
        case "auth/keychain-error":
          alert("原因不明のエラーが起きました。しばらくしてからもう一度お試しください。それでも解決されない場合はお手数ですがお問い合わせフォームよりご連絡ください。")
          break;
        case "auth/internal-error":
          alert("原因不明のエラーが起きました。しばらくしてからもう一度お試しください。それでも解決されない場合はお手数ですがお問い合わせフォームよりご連絡ください。")
          break;



        case "auth/operation-not-allowed":
          alert("なにこれ")
          break;
        case "auth/invalid-email":
          alert("正しいメールアドレスではありません。")
          break;
        case "auth/user-disabled":
          alert("アカウントが無効になっています。心当たりのない方はお手数ですがお問い合わせフォームよりご連絡ください。")
          break;
        case "auth/wrong-password":
          alert("正しいパスワードではありません。")
          break;
        default:
          alert("原因不明のエラーが起きました。しばらくしてからもう一度お試しください。それでも解決されない場合はお手数ですがお問い合わせフォームよりご連絡ください。")
      }
    })
}