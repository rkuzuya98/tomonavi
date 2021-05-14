/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/self-closing-comp */
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { mgCreateAsync } from '../../asynchronous/mgCreateAsync'
import { singOutAsync } from '../../asynchronous/signOutAsync'
import { Button } from '../UIKit/ButtonJ'

export const MyPageButtons = ({
  userData
}) => {

  // ページ遷移
  const history = useHistory()
  const toManager = () => history.push(`/manager/${userData.id}`)
  const toHome = () => history.push('/')

  return (
    <Wrapper>
      <Button
        id="mypageButton1"
        icon="forward"
        text="主催者モード"
        backgroundColor="khaki"
        onClick={() => mgCreateAsync(userData.id, toManager)}
        color="rgba(0,0,0,0.7)"
        validation={true}
      />
      <Button
        id="mypageButton2"
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
  display: grid;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    & > button {
      &:last-child {
        grid-row: 1/2;
      }
    }
  }
`