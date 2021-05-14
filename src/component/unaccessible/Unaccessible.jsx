/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import styled, { css } from 'styled-components'
import { Uid } from '../../App'
import { Button } from '../UIKit/ButtonJ'
import { Tile } from '../UIKit/TileJ'

export const Unaccessible = ({
  signing,
  display
}) => {
  const [uid, setUid] = useContext(Uid)
  const history = useHistory()
  const toMyPage = () => {
    const url = `/mypage/${uid}`
    history.push(url)
  }
  const toHome = () => {
    const url = `/`
    history.push(url)
  }
  const toBack = () => {
    history.goBack()
  }
  return (
    <Wrapper display={display}>
      <Tile>
        <i className="fas fa-check-circle"/>
        <p>
          ログイン済みです
          <i className="fas fa-check"/>        
        </p>
        <div>
          <p>このアカウントは既にログイン済みです。</p>
          <p>引き続きサービスをご利用ください。</p>
        </div>
        <Button
          text="トップページへ移動"
          icon="forward"
          backgroundColor="khaki"
          validation={true}
          onClick={toHome}
        />
        <Button
          text="マイページへ移動"
          icon="forward"
          backgroundColor="khaki"
          validation={true}
          onClick={toMyPage}
        />
        <Button
          text="戻る"
          icon="back"
          backgroundColor="gainsboro"
          validation={true}
          onClick={toBack}
        />
      </Tile>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > div {
    & > i {
      font-size: 100px;
      color: lightblue;
      margin-bottom: 20px;
    }
    & > p {
      font-weight: bold;
      margin-bottom: 40px;
      color: steelblue;
      & > i {
        margin-left: 5px;
        /* color: darkblue; */
      }
    }
    & > Button {
      margin: 10px;
      &:nth-of-type(1) {
        margin-top: 20px;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  transition: all 0.3s ease;
  ${({ display }) => display || css`
    opacity: 0.5;
    pointer-events: none;
    height: 0px;
    overflow-y: hidden;
  `}
`