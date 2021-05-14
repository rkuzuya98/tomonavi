/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { UserData } from '../../App';
import { ModalButton } from './ModalButton';


export const ModalButtons = ({
  nowIndex,
  maxIndex,
  setMaxIndex,
  datas,
  setNowIndex,
  doneIndex,
  toMgComm,
  submitFunction
}) => {

  // 操作可能データの更新
  const handleMaxIndex = () => nowIndex === maxIndex && setMaxIndex(maxIndex + 1)

  // グローバルstate
  const [userData,setUserData] = useContext(UserData)

  return (
    <Wrapper
      doneIndex={doneIndex}
      maxIndex={maxIndex}
      nowIndex={nowIndex}
    >
      <div>

        {
          // 左側のボタンについて
          nowIndex === 0 ?
          // ボタン非表示
          <div/> :
          // 「前へ」ボタン
          <ModalButton
            iconButton="prev"
            onClick={() => setNowIndex(nowIndex - 1)}
            validation={true}
          />
        }
        {
          // 右側のボタンについて
          (nowIndex + 1) === Object.keys(datas).length ?
          <div/> :
          // 「次へ」ボタン
          <ModalButton
            iconButton="next"
            onClick={() => {
              setNowIndex(nowIndex + 1)
              handleMaxIndex()
            }}
            validation={
              // 一度入力済みのデータ項目
              maxIndex > nowIndex ||
              // 完了済み扱いのデータ項目
              doneIndex.includes(nowIndex)
            }
          />
        }
      </div>
      {
        doneIndex.length === Object.keys(datas).length &&
        <span>
          {/* 「送信」ボタン */}
          <button
            type="button"
            onClick={
              () => {
                submitFunction(
                  userData.id,
                  datas,
                  toMgComm,
                  setUserData
                )
                console.log("clicked!")
              }
            }
          >
            登録
          </button>
        </span>
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  margin-top: 20px;
  & > div {
    display: flex;
    justify-content: space-between;
  }

${({ doneIndex })=>doneIndex||css`
  & button {
    opacity: 0.5;
    pointer-events: none;
  }
`};
${({ nowIndex,maxIndex }) => (nowIndex <= maxIndex) && css`
  & button:first-child {
    opacity: 1;
    pointer-events: auto;
  }
`};

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    & > button {
      padding: 5px 40px;
      background-color: steelblue;
      color: white;
      border: none;
      border-radius: 10px;
      font-weight: bold;
      transition: 0.3s all ease;
      &:hover {
        opacity: 0.5;
      }
    }
  }
`