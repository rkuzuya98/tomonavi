import React, { useEffect, useState } from 'react'
// eslint-disable-next-line import/no-cycle
import { Router } from './Router'
import { auth } from './firebase/config'
import DotsLoader from './component/loading/DotsLoader'
import { getUserDataAsync } from './asynchronous/getUserDataAsync'

// グローバルなstate
export const Uid = React.createContext()
export const Signing = React.createContext()
export const UserData = React.createContext()
export const StockData = React.createContext()


function App() {

  // ログイン状態
  // const [uid, setUid] = useState('loading')
  const [uid, setUid] = useState(null)
  console.log("uid===============")
  console.log(uid)

  const [signing, setSigning] = useState(null)

  // ユーザー情報
  const [userData, setUserData] = useState(null)
  console.log("userData===============")
  console.log(userData)

  // ユーザー情報
  const [stockData, setStockData] = useState(null)

  // ログイン状態の確認
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid)
        getUserDataAsync(user.uid,setUserData,setSigning)
        console.log("login?===============")
        console.log("yes!!!")
      } else {
        setSigning(false)
        setUid(null)
        console.log("login?===============")
        console.log("no!!!")
      }
    });
  },[])

  return (
    <>
      {
        // eslint-disable-next-line no-nested-ternary
        uid === 'loading' ?
        <DotsLoader/> :
        <Uid.Provider value={[uid,setUid]}>
          <Signing.Provider value={[signing,setSigning]}>

            <UserData.Provider value={[userData,setUserData]}>
              <StockData.Provider value={[stockData,setStockData]}>
                <Router />
              </StockData.Provider>
            </UserData.Provider>
          </Signing.Provider>
        </Uid.Provider>
      }
    </>
  )
}

export default App
