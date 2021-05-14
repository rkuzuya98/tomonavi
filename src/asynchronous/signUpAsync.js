/* eslint-disable no-alert */
import { auth, db } from "../firebase/config";

export const singUpAsync = (
  email,
  password,
  setUid,
  setUserData,
  toMyPage
  ) => {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const {...user} = userCredential.user
      db.collection("users").doc(user.uid).set({
        id: user.uid,
        email: user.email,
        username: "",
        theme: []
      },{merge: true})
      .then((docRef) => {
        setUid(user.uid)
        setUserData({
          id: user.uid,
          email: user.email,
          username: "",
          theme: []
        })
        toMyPage(user.uid)
      })
      .catch((error) => {
      });

    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      console.log(errorCode)
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



        case "auth/email-already-exists":
          alert("すでに使用されているメールアドレスです。")
          break;
        case "auth/email-already-in-use":
          alert("すでに使用されているメールアドレスです。")
          break;
        case "auth/id-token-expired":
          alert("トークンが期限切れになりました。再度サインアップを行なって下さい。")
          break;
        case "auth/id-token-revoked":
          alert("トークンが期限切れになりました。再度サインアップを行なって下さい。")
          break;
        case "auth/invalid-email":
          alert("正しいメールアドレスを入力して下さい")
          break;
        case "auth/invalid-email-verified":
          alert("正しいメールアドレスを入力して下さい")
          break;
        case "auth/invalid-password":
          alert("パスワードには6文字以上の英数字を入力して下さい")
          break;
        case "auth/weak-password":
          alert("パスワードには6文字以上の英数字を入力して下さい")
          break;
        default:
          alert("原因不明のエラーが起きました。しばらくしてからもう一度お試しください。それでも解決されない場合はお手数ですがお問い合わせフォームよりご連絡ください。")
      }
    })
}