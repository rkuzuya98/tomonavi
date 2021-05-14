/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-cycle */
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { UserData } from '../App'
import { Tile } from '../component/UIKit/TileJ'
import { db } from '../firebase/config'

export const Home = () => {
  const [userData, setUserData] = useContext(UserData)
  console.log("userData===============")
  console.log(userData)

  useEffect(() => {
    console.log("USEEFECT START!!!!!!")
    const getUserData = async () => {
      await db.collection("users").doc("zCO0L2CQtYh8yKcrDI7YNPeNCuf1"
        ).get()
        .then((doc) => {
          const docData = doc.data()
          console.log("DATAFETCH END!!!!!!")
        })
      console.log("AFTER DATAFETCH!!!!!!")
    }
    getUserData()
  },[])

  return (
    <Wrapper>
      <Tile>
        <p>このサイトはポートフォリオとして一時的に公開しています。</p>
        <p>掲載しているコミュニティ情報は架空なのでご注意ください。</p>
      </Tile>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > h1 {
    color: lightsalmon;
  }
  & > img {
    width: 100%;
  }
`

// http://localhost:3000/mypage/fNFyInoCyTNf6p0kJBD2M9gzLRy2
