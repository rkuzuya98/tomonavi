/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { UserData } from '../../App'
import { updateUsers } from '../../asynchronous/updateUsers'
import { ageList } from '../../data/age'
import { sexList } from '../../data/sex'
import { themeList } from '../../data/theme'
import { EditImage } from './EditImage'
import { EditInput } from './EditInput'
import { EditSelect } from './EditSelect'
import { EditTextarea } from './EditTextarea'

export const EditWindow = ({
  page,
  type,
  data,
  dataKey,
  display,
  handleDisplay,
}) => {

  // 変更データ反映のためにsetUserDataを取得
  const [userData, setUserData] = useContext(UserData)

  // リセット処理時に使用する値を保持
  const [reset, setReset] = useState(null)
  const handleReset = (value) => setReset(value)

  // 変更を保存するために用いる更新用のデータ
  const [updatingData, setUpdatingData] = useState(null)
  const handleUpdatingData = (value) => setUpdatingData({ [dataKey]: value })

  // モーダルウィンドウが閉じた時にリセット処理を行う
  useEffect(() => {
    handleReset(data && data[dataKey])
  },[data, dataKey, display])

  // 読み込み完了データを格納（非同期処理への対応）
  useEffect(() => {
    data !== null &&
    handleUpdatingData(data[dataKey])
  },[data, dataKey])

  return (
    <Wrapper>
      <h1>{page === "mypage" && "ユーザー情報"}</h1>
      <h2>{dataKey === "username" && "ユーザー名"}</h2>
      {
        type === "input" &&
        <EditInput
          value={Object.values(updatingData)[0]}
          reset={reset}
          handleReset={handleReset}
          updatingData={updatingData}
          handleUpdatingData={handleUpdatingData}
        />
      }
      {
        type === "textarea" &&
        <EditTextarea
          value={Object.values(updatingData)[0]}
          reset={reset}
          handleReset={handleReset}
          updatingData={updatingData}
          handleUpdatingData={handleUpdatingData}
        />
      }
      {
        type === "image" &&
        <EditImage
          value={Object.values(updatingData)[0]}
          reset={reset}
          handleReset={handleReset}
          updatingData={updatingData}
          handleUpdatingData={handleUpdatingData}
        />
      }
      {
        (type === "radio" || type === "checkbox") &&
        <EditSelect
          value={Object.values(updatingData)[0]}
          reset={reset}
          handleReset={handleReset}
          updatingData={updatingData}
          handleUpdatingData={
            handleUpdatingData
          }
          buttonType={type}
          selectingItems={
            dataKey === "theme" ?
            themeList :
            dataKey === "sex" ?
            sexList :
            dataKey === "age" ?
            ageList :
            null
          }
        />
      }
      <button
        type="button"
        onClick={() => handleReset(data && data[dataKey])}
      >
        リセット
      </button>
      <button
        type="button"
        onClick={() => {
          updateUsers(
            data?.id,
            updatingData,
            handleDisplay,
            setUserData
          )
        }}
      >
        保存
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`