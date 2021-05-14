/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react'
import styled, { css } from "styled-components"
import { Button } from '../UIKit/Button'
import { SelectItems } from './SelectItems'

export const ModalWindow = ({
  window,
  handleWindow,
  handleCurrent,
  current,
  selectItems
}) => {

  // 選択中の項目（絞り込み検索ページには未反映）
  const [selectingItem, setSelectingItem] = useState(current)
  const handleSelectingItem = (item) => setSelectingItem(item)

  
  return (
    <Wrapper
      window={window}
    >
      {/* モーダルウィンドウ外 */}
      <div onClick={handleWindow} />
      {/* モーダルウィンドウ内 */}
      <div>
        {/* 閉ボタン */}
        <button
          type="button"
          onClick={handleWindow}
        >
          <i className="fas fa-times"/>
        </button>
        <i className="fas fa-users"/>
        <h1>分野・テーマ</h1>
        <SelectItems
          handleCurrent={handleCurrent}
          current={current}
          selectingItem={selectingItem}
          handleSelectingItem={handleSelectingItem}
          selectItems={selectItems}
        />
        <div>
          <Button
            icon=""
            text="決定"
            backgroundColor="steelblue"
            onClick={() => {
              handleCurrent(selectingItem)
              handleWindow()
            }}
            color="white"
            validation={true}
          />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  z-index: 50;
  & > div:nth-of-type(1) {
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    left: 0;
    top:0;
    right: 0;
    bottom: 0;
  }
  & > div:nth-of-type(2) {
    position: fixed;
    background-color: white;
    left: 20px;
    right: 20px;
    bottom: 20px;
    top: 80px;
    max-width: 500px;
    max-height: 500px;
    margin: 0 auto;
    padding: 30px;
    border-radius: 10px;
    /* 閉じるボタン */
    & > button:nth-of-type(1) {
      border: none;
      background-color: white;
      font-size: 30px;
      position: absolute;
      right: 20px;
      top: 13px;
      & > i {
        color: steelblue;
      }
    }
    & > i {
      font-size: 30px;
      margin-bottom: 10px;
    }
    & > h1 {
      font-size: 16px;
    }
    & > div:nth-of-type(1) {
      position: absolute;
      top: 120px;
      left: 30px;
      right: 20px;
      bottom: 80px;
      overflow: scroll;
      &::-webkit-scrollbar {
        width: 10px;
      }
      &::-webkit-scrollbar-track {
        border-radius: 5px;
        /* margin-top: 20px; */

      }
      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: rgba(70,130,180,0.5);
      }
    }
    /* 決定ボタン */
    & > div:nth-of-type(2) {
      background-color: aliceblue;
      position: absolute;
      bottom: 0px;
      left: 50%;
      height: 80px;
      width: 100%;
      transform: translateX(-50%);
      border-radius: 0 0 10px 10px;
      border-top: 2px solid rgba(70,130,180,0.1);
      & > button {
        top:50%;
        transform: translateY(-50%);
      }
    }
  }
  transition: all 0.3s ease;
  ${({window}) => !window && css`
    opacity: 0;
    pointer-events: none;
  `};
  
`