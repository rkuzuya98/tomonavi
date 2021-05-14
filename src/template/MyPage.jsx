/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
import React, { useContext } from 'react'
import { UserData } from '../App'
import { Auth } from '../Auth'
import { Breadcrumbs } from '../component/breadcrumbs/Breadcrumbs'
import { MyInfo } from '../component/mypage/MyInfo'
import { MyPageButtons } from '../component/mypage/MyPageButtons'
import { MypageTop } from '../component/mypage/MypageTop'
import { BlankSpace } from '../component/UIKit/BlankSpace'
import { Tile } from '../component/UIKit/TileJ'

export const MyPage = () => {

  // ユーザー情報の取得
  const [userData] = useContext(UserData)

  return (
    <div>
      <Auth>
        <Breadcrumbs
          firstPathName="マイページ"
        />
        <Tile>
          <MypageTop
            userData={userData}
          />
          <BlankSpace height="60px"/>
          {/* <MyFavorite
            userData={userData}
          />
          <BlankSpace height="60px"/> */}
          <MyInfo
            userData={userData}
          />
          <BlankSpace height="40px"/>
          <MyPageButtons
            userData={userData}
          />
        </Tile>
      </Auth> 
    </div>
  )
}