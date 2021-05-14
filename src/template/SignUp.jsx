/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { AuthReverse } from '../AuthReverse'
import { Breadcrumbs } from '../component/breadcrumbs/Breadcrumbs'
import { EmailForm } from '../component/signUp/EmailForm'
import { OtherOptions } from '../component/signUp/OtherOptions'
import { Process } from '../component/signUp/Process'
import { SignUpIntro } from '../component/signUp/SignUpIntro'
import { SignUpOptions } from '../component/signUp/SignUpOptions'
import { Tile } from '../component/UIKit/TileJ'

export const SignUp = () => {
  const location = useLocation()

  // メールアドレスでの登録フォーム
  const [email, setEmail] = useState(false)
  const hdEmail = () => setEmail(!email)
  return (
    <div>
      {/* 認証バリデーション */}
      <AuthReverse>
        <Breadcrumbs location={location}/>
        {/* ページ上部 */}
        <Tile
          paddingBottom="30px"
        >
          <SignUpIntro/>
        </Tile>
        <Tile>
          <Process/>
        </Tile>
        {/* ページ下部 */}
        <Tile>
          {
            email ?
            <EmailForm/> :
            <SignUpOptions
              hdEmail={hdEmail}
            />
          }
          <OtherOptions/>
        </Tile>
        {/* <Tile> */}
        {/* </Tile> */}
      </AuthReverse>
    </div>
  )
}