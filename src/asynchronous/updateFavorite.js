import { db } from "../firebase/config"

export const updateFavorite = async (
  userId,
  commId,
  favorite
) => {
  const favorites = []
  // 最新のお気に入り情報の取得
  await db.collection("users").doc(userId).get()
    .then((doc) => {
      const docData = doc.data()
      favorites.push(...docData.favorites)
    })
    if (favorite === true) {
    // お気に入り追加処理
    const newFavorites = [...favorites, commId]
    db.collection("users").doc(userId).set({
      favorites: newFavorites
    },{ merge: true })
  } else if (favorite === false) {
    // お気に入り削除処理
    favorites.splice(favorites.indexOf(commId),1)
    db.collection("users").doc(userId).set({
      favorites
    },{ merge: true })
  }
}