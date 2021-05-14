/* eslint-disable no-lonely-if */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled, { css } from 'styled-components'
// eslint-disable-next-line import/no-cycle
import { Signing, UserData } from './App'
import DotsLoader from './component/loading/DotsLoader'
import { NotAuth } from './component/loading/NotAuth'
import { NotSignedIn } from './component/loading/NotSignedIn'

export const Auth = ({
  type,
  commData,
  children
}) => {

  // URLに紐付けられているidを取得
  const { idPath } = useParams()

  // サインイン状態を識別
  const [signing] = useContext(Signing)
  // 認証状態を識別
  const [auth, setAuth] = useState(null)
  // ユーザー情報を保持
  const [userData] = useContext(UserData)


  useEffect(() => {
    // コミュニティ管理ページ
    if (type === "mgComm") {
      if (!(commData === null)) {
        if (commData?.member.includes(userData?.id)) {
          setAuth(true)
        } else {
          setAuth(false)
        }
      }
    } else {
      if (!(signing === null)) {
        if (idPath === userData?.id) {
          setAuth(true)
        } else {
          setAuth(false)
        }
      }
    }
  },[signing,userData,idPath,commData])

  return (
    <div>
      <DotsLoader
        loading={
          // サインインしていない場合
          !(
            !(signing === null) &&
            signing === false
          )
          &&
          // 認証NG
          !(
            signing === true &&
            !(auth === null) &&
            !auth
          )
          &&
          // 認証OK
          !(
            signing === true &&
            !(auth === null) &&
            auth
          )
        }
      />  
      {/* サインインしていない場合 */}
      <NotSignedIn
        display={
          !(signing === null) &&
          signing === false
        }
      />
      {/* サインインしている場合 */}
      {/* 認証NG */}
      <NotAuth
        display={
          signing === true &&
          !(auth === null) &&
          !auth
        }
      />
      {/* 認証OK */}
      <Children
        display={
          signing === true &&
          !(auth === null) &&
          auth
        }
      >
        {children}
      </Children>
    </div>
  )
}

const Children = styled.div`
  transition: all 0.3s ease;
  ${({ display }) => display || css`
    opacity: 0;
    height: 0;
    pointer-events: none;
    overflow-y: hidden;
  `}
`