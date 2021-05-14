/* eslint-disable import/no-cycle */
/* eslint-disable no-lonely-if */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
// eslint-disable-next-line import/no-cycle
import { Signing } from './App'
import { AlreadySigning } from './component/loading/AlreadySigning'
import DotsLoader from './component/loading/DotsLoader'
import { Unaccessible } from './component/unaccessible/Unaccessible'

export const AuthReverse = ({
  children
}) => {

  // サインイン状態を識別
  const [signing] = useContext(Signing)

  // 認証状態を識別
  const [auth, setAuth] = useState(null)

  console.log({signing})
  console.log({auth})


  useEffect(() => {
    // コミュニティ管理ページ
      if (!(signing === null)) {
        if (signing === false) {
          setAuth(true)
          console.log("a")
        } else {
          setAuth(false)
          console.log("b")
        }
      }
  },[signing])

  return (
    <div>
      <DotsLoader
        loading={
          auth === null
        }
      />  
      {/* サインインしていない場合 */}
      <Children
        display={
          !(auth === null) &&
          auth &&
          true
        }
      >
        {children}
      </Children>
      {/* サインインしている場合 */}
      <AlreadySigning
        display={
          !(auth === null) &&
          !auth &&
          true
        }
      />
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