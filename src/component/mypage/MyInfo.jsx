/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/named */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { EditWindow } from '../edit/EditWindow'
import { ModalWindow } from '../edit/ModalWindow'

export const MyInfo = ({
  userData
}) => {
  
  // 編集画面の表示の切り替え
  const [editWindow, setEditWindow] = useState(false)
  const handleEditWindow = () => setEditWindow(!editWindow)
  
  // モーダルウィンドウに渡すデータキー
  const [dataKey, setDataKey] = useState(null)
  const handleDataKey = (key) => setDataKey(key)
  
  const myInfoItems = [
    {
      title: "ユーザー名",
      key: "username"
    },
    {
      title: "メールアドレス",
      key: "email"
    },
    {
      title: "アイコン",
      key: "icon"
    },
    {
      title: "分野・テーマ",
      key: "theme"
    },
    {
      title: "年齢",
      key: "age"
    },
    {
      title: "性別",
      key: "sex"
    },
  ]

  return (
    <Wrapper
    icon={userData?.icon}
    >
      <h1>登録情報</h1>
      <form>
        <ul>
          {
            myInfoItems.map((item) => {
              const itemKey = item.key
              return (
                <li key={itemKey}>
                  <p>
                    <span>{item.title}</span>
                    <i
                      className="fas fa-pencil-alt"
                      onClick={() => {
                        handleEditWindow()
                        handleDataKey(itemKey)
                      }}
                    />
                  </p>
                  {
                    itemKey === "icon" &&
                    <div id="myInfoIcon">
                      <div/>
                    </div>
                  }
                  {
                    (
                      itemKey === "username" ||
                      itemKey === "email" ||
                      itemKey === "age" ||
                      itemKey === "sex" 
                      ) &&
                      <p>
                      {!(userData === null) &&
                      userData[itemKey] }
                    </p>
                  }
                  {
                    itemKey === "theme" &&
                    <ul>
                      {
                        !(userData === null) &&
                        userData[itemKey].map((i) => 
                          <li key={i}>{i}</li>
                        )
                      }
                    </ul>
                  }
                </li>
              )
            })
          }
        </ul>
      </form>
      {/* モーダルウィンドウ */}
      <ModalWindow
        display={editWindow}
        handleDisplay={handleEditWindow}
      >
        {/* データ編集用のモーダル画面 */}
        <EditWindow
          page="mypage"
          type={
            dataKey === "icon" ?
            "image" :
            dataKey === "username" ||
            dataKey === "email" ?
            "input" :
            dataKey === "age" ||
            dataKey === "sex" ?
            "radio" :
            dataKey === "theme" ?
            "checkbox" :
            null
          }
          data={userData}
          dataKey={dataKey}
          display={editWindow}
          handleDisplay={handleEditWindow}
        />
      </ModalWindow>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 90%;
  max-width: 400px;
  & > h1 {
    font-size: 20px;
  }
  & > form {
    & > ul {
      & > li {
        
        margin-bottom: 30px;
        & > p {
        text-align: left;
        padding-left: 8px;
        font-weight: bold;
        
          &:nth-of-type(1) {
            border-bottom: 1px solid steelblue;
            margin-bottom: 15px;
            
            & > span {
              font-weight: bold;
              color: steelblue;
            }
            & > i {
              color: steelblue;
              font-size: 12px;
              margin-left: 2px;
              padding: 5px;
              border-radius: 15px;
              transition: all 0.3s ease;
              transform :translateY(-2px);
              cursor: pointer;
              &:hover {
                background-color: steelblue;
                color: white;
              }
            }
          }
          &:nth-of-type(2) {
            width: 100%;
            overflow-wrap: break-word;
          }
        }
        & > div#myInfoIcon {
          display: flex;
          justify-content: start;
          align-items: center;
          & > div {
            ${({ icon }) => icon && css`
              background-image: url(${icon});
            `};
            height: 80px;
            width: 80px;
            background-position: center;
            background-size: cover;
            border-radius: 50%;
          }
        }
        & > ul {
          display: flex;
          & > li {
            display: inline-block;
            padding-left: 10px;
            font-weight: bold;
          }
        }
      }
    }
  }
`