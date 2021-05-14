import { auth } from "../firebase/config";

export const singOutAsync = (pushFunction) => {
  auth.signOut()
  .then(_ => {
    // ログイン画面に戻る等
    pushFunction()
  }, err => {
    // エラーを表示する等
  });
}