/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { AuthReverse } from '../AuthReverse'
import { Breadcrumbs } from '../component/breadcrumbs/Breadcrumbs'
import { EmailForm } from '../component/signIn/EmailForm'
import { OtherOptions } from '../component/signIn/OtherOptions'
import { SignInForm } from '../component/signIn/SignInForm'
import { SignInOptions } from '../component/signIn/SignInOptions'
import { TopArea } from '../component/signIn/TopArea'
import { Tile } from '../component/UIKit/TileJ'

export const SignIn = () => {
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
          <TopArea/>
        </Tile>
        <Tile>
          {
            email ?
            <EmailForm/> :
            <SignInOptions
              hdEmail={hdEmail}
            />
          }
          <OtherOptions/>
        </Tile>
      </AuthReverse>
    </div>
  )
}