/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import styled from 'styled-components'
import { Signing, UserData } from '../App'
import { singOutAsync } from '../asynchronous/signOutAsync'
import { Auth } from '../Auth'
import { Breadcrumbs } from '../component/breadcrumbs/Breadcrumbs'
import DotsLoader from '../component/loading/DotsLoader'
import { MgCommInfo } from '../component/mgComm/MgCommInfo'
import { MgCommOverview } from '../component/mgComm/MgCommOverview'
import { BlankSpace } from '../component/UIKit/BlankSpace'
import { Button } from '../component/UIKit/ButtonJ'
import { CommingSoon } from '../component/UIKit/CommingSoon'
import { Tile } from '../component/UIKit/TileJ'
import { db } from '../firebase/config'

export const MgComm = () => {

  const [userData, setUserData] = useContext(UserData)
  const [signing, setSigning] = useContext(Signing)
  const location = useLocation()

  const [loading, setLoading] = useState(true)
  const handleLoading = (state) => setLoading(state)

  const [auth, setAuth] = useState(null)


  const { idPath } = useParams()

  const [commData, setCommData] = useState(null)

  useEffect(() => {
    const commsRef = db.collection("communities")
    commsRef
    .doc(idPath)
    // .where("url", "==", commPath)
    .get()
    .then((doc) => {
      const docData = doc.data()
      setCommData(docData)
      handleLoading(false)
    })
  },[])

  useEffect(() => {
    commData?.member.includes(userData?.id) ? setAuth(true) : setAuth(false)
  },[commData, userData])

  // ページ遷移
  const history = useHistory()
  const toHome = () => history.push("/")
  const toComm = () => history.push(`/community/${commData?.url}`)
  return (
    <Wrapper>
      <Auth type="mgComm" commData={commData} >
        <Breadcrumbs
          firstPathName="コミュニティ管理ページ"
        />
        <Tile>
          <h1>コミュニティ管理ページ</h1>
          <CommingSoon/>
          <BlankSpace height="20px"/>
          {/* <MgCommOverview commData={commData}/> */}
          {/* <MgCommInfo commData={commData}/> */}
          <Button
            icon="forward"
            text="コミュニティページ"
            backgroundColor="khaki"
            onClick={toComm}
            color="rgba(0,0,0,0.7)"
            validation={true}
          />
          <BlankSpace height="20px"/>
          <Button
            icon="back"
            text="ログアウト"
            backgroundColor="gainsboro"
            onClick={() => singOutAsync(toHome)}
            color="rgba(0,0,0,0.7)"
            validation={true}
          />
        </Tile>
      </Auth>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`