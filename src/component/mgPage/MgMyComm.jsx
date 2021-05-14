/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/self-closing-comp */
import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { UserData } from '../../App'
import { db } from '../../firebase/config'

export const MgMyComm = ({
  // userData
}) => {
  const [myComm, setMyComm] = useState([])
  const [userData, setUserData] = useContext(UserData)

  const history = useHistory()

  useEffect(() => {
    console.log("useEffect")
    if (userData?.id) {
      db
      .collection("communities")
      .where('member', 'array-contains-any', [userData.id] )
      .get()
      .then((snapshot) => {
        const altMyComm = []
        snapshot.docs.map((doc) => {
          const docData = doc.data()
          altMyComm.push(docData)
          console.log(docData)
        })
        return altMyComm
      })
      .then((altMyComm) => {
        setMyComm(altMyComm)
      })
      .catch(() => {
        setMyComm(["該当なし"])
      })
    }
  },[userData])
  console.log(userData)
  return (
    <Wrapper>
      <h1>主催コミュニティ一覧</h1>
      <ul>
        {
          myComm.map((comm) => {
            const commPage = `/community/${comm.url}`
            const commMgPage = `/manager-community/${comm.id}`
            return (
              <li key={comm.id}>
                <p>{comm.name}</p>
                <div>
                  <Link to={commPage}>コミュニティページへ移動</Link>
                  <Link to={commMgPage}>ページを編集する</Link>
                </div>
              </li>
            )
          })
        }
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  & > h1 {
    font-size: 20px;
  }
  & > ul {
    & > li {
      margin-bottom: 10px;
      & > div {
        display: flex;
        flex-flow: column;
        & > a {
          color: steelblue;
        }
      }
    }
  }
`