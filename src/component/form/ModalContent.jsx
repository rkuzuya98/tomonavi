/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/named */
/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { ModalButtons } from './ModalButtons';
import { ModalData } from './ModalData';
import { ModalPath } from './ModalPath';

export const ModalContent = ({
  handleModalForm,
  toMgComm,
  title,
  creatingData,
  creatingList,
  submitFunction
}) => {

  // 現在表示中のデータ番号
  const [nowIndex, setNowIndex] = useState(0)
  // 操作可能な最大データ番号
  const [maxIndex, setMaxIndex] = useState(0)
  // 入力完了したデータ番号
  const [doneIndex, setDoneIndex] = useState([])

  // 入力完了データの更新
  const handleDoneIndex = (option) => {
    const newDoneIndex = [...doneIndex];
    if(option === "add") {
      // 追加処理（未追加だったら追加）
      newDoneIndex.includes(nowIndex) || newDoneIndex.push(nowIndex)
    } else if(option === "remove") {
      // 削除処理（未削除だったら削除）
      newDoneIndex.includes(nowIndex) && newDoneIndex.splice(newDoneIndex.indexOf(nowIndex), 1)
    }
    setDoneIndex(newDoneIndex);
  }

  // 入力データ（DB送信用）
  const [datas, setDatas] = useState(creatingData);
  const handleDatas = (key) => {
    const newEnteringDatas = { ...datas }
    return (value) => {
      newEnteringDatas[key] = value
      setDatas(newEnteringDatas)
    }
  }
  console.log("datas===============")
  console.log(datas)

  return (
    <Wrapper
      datasIndex={nowIndex}
      maxIndex={maxIndex}
    >
      {/* 閉じるボタン */}
      {
        handleModalForm &&
        <button
          type="button"
          onClick={handleModalForm}
        >
          <i className="fas fa-times"/>
        </button>
      }
      <i className="far fa-user-circle"/>
      <h1>{title}</h1>
      <ModalPath
        setNowIndex={setNowIndex}
        datas={datas}
        nowIndex={nowIndex}
        maxIndex={maxIndex}
        doneIndex={doneIndex}
      />
      <h2>
        {creatingList[nowIndex].jpn}
        {
          creatingList[nowIndex].open === "public" &&
          <>
            <i className="fas fa-eye"/>
            <span>公開</span>
          </>
        }
        {
          creatingList[nowIndex].open === "private" &&
          <>
            <i className="fas fa-eye-slash"/>
            <span>非公開</span>
          </>
        }
      </h2>
      <p>{creatingList[nowIndex].explanation}</p>
      <ModalData
        value={Object.values(datas)[nowIndex]}
        dataUpdate={handleDatas(creatingList[nowIndex].eng)}
        dataList={creatingList[nowIndex]}
        handleDoneIndex={handleDoneIndex}
      />
      <ModalButtons
        nowIndex={nowIndex}
        maxIndex={maxIndex}
        setMaxIndex={setMaxIndex}
        datas={datas}
        setNowIndex={setNowIndex}
        doneIndex={doneIndex}
        toMgComm={toMgComm}
        submitFunction={submitFunction}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  & > h1, & > i {
    display: flex;
    justify-content: center;
  }
  & > i {
    font-size: 30px;
    margin-bottom: 10px;
  }
  & > h1 {
    font-size: 16px;
  }

  & > h2 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    & > i {
      font-size: 16px;
      margin-left: 10px;
      color: steelblue;
    }
    & > span {
      font-size: 12px;
      margin-left: 3px;
      color: steelblue;
    }
  }


  & > button {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 30px;
    border: none;
    background-color: rgba(0,0,0,0);
    margin: 15px;
  }

  & > div:nth-of-type(2) {
    position: absolute;
    top: 220px;
    bottom: 70px;
    left: 30px;
    right: 30px;
    overflow: scroll;

    /* background-color: yellow; */
    /* border: 1px solid rgba(0,0,0,0.1); */
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 5px;
      margin-top: 20px;

    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: rgba(70,130,180,0.5);
    }
  }
  & > div:nth-of-type(3) {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding: 15px 40px;
    border-radius: 0 0 10px 10px;
    background-color: aliceBlue;
  }
`