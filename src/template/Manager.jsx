/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import React, { useContext, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Uid, UserData } from '../App'
import { createComm } from '../asynchronous/createCommAsync'
import { singOutAsync } from '../asynchronous/signOutAsync'
import { Auth } from '../Auth'
import { Breadcrumbs } from '../component/breadcrumbs/Breadcrumbs'
import { ModalForm } from '../component/form/ModalForm'
import { MgBottom } from '../component/mgPage/MgBottom'
import { MgMyComm } from '../component/mgPage/MgMyComm'
import { MgTop } from '../component/mgPage/MgTop'
import { BlankSpace } from '../component/UIKit/BlankSpace'
import { Button } from '../component/UIKit/ButtonJ'
import { Tile } from '../component/UIKit/TileJ'
import { mgCommCreatingData, mgCommCreatingList } from '../data/mgComm'

export const Manager = () => {

  // ユーザー情報の取得
  const [userData] = useContext(UserData)

  // コミュニティ新規登録フォーム
  const [modalForm, setModalForm] = useState(false)
  const handleModalForm = () => setModalForm(!modalForm)

  // ページ遷移
  const history = useHistory()
  const toMgComm = (commId) => history.push(`/manager-community/${commId}`)

  return (
    <div>
      <Auth>
        <Breadcrumbs
          firstPathName="主催者ページ"
        />
        <Tile>
          <MgTop
            userData={userData}
          />
          <BlankSpace height="40px"/>
          <MgMyComm
            userData={userData}
          />
          <BlankSpace height="40px"/>
          <MgBottom
            userData={userData}
            handleModalForm={handleModalForm}
          />
        </Tile>
        {
          modalForm &&
          <ModalForm
            handleModalForm={handleModalForm}
            toPage={toMgComm}
            title="コミュニティ情報の登録"
            creatingData={mgCommCreatingData}
            creatingList={mgCommCreatingList}
            submitFunction={createComm}
          />
        }
      </Auth> 
    </div>
  )
}
