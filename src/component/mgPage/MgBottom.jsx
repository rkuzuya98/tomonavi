/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/self-closing-comp */
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { singOutAsync } from '../../asynchronous/signOutAsync'
import { BlankSpace } from '../UIKit/BlankSpace'
import { Button } from '../UIKit/ButtonJ'
import { CommingSoon } from '../UIKit/CommingSoon'

export const MgBottom = ({
  userData,
  handleModalForm
}) => {
  const a = "a"


  // ページ遷移
  const history = useHistory()
  const toCommunity = (commId) => history.push(`/community/${commId}`)
  const toMgComm = (commId) => history.push(`/manager-community/${commId}`)
  const toMyPage = () => history.push(`/mypage/${userData?.id}`)
  const toHome = () => history.push("/")

  return (
    <Wrapper>
      <Button
        text="コミュニティの登録"
        backgroundColor="khaki"
        onClick={handleModalForm}
        color="rgba(0,0,0,0.7)"
        validation={true}
      />
      <BlankSpace height="20px"/>
      <Button
        icon="forward"
        text="参加者モード"
        backgroundColor="khaki"
        onClick={toMyPage}
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > h1 {
    font-size: 20px;
  }
`