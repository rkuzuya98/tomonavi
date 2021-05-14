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

export const MgCommInfo = ({
  userData,
  commData
}) => {
  
  // 編集画面の表示の切り替え
  const [editWindow, setEditWindow] = useState(false)
  const handleEditWindow = () => setEditWindow(!editWindow)
  
  // モーダルウィンドウに渡すデータキー
  const [dataKey, setDataKey] = useState(null)
  const handleDataKey = (key) => setDataKey(key)
  
  const mgCommInfoItems = [
    {
      title: "開催場所",
      key: "location"
    },
    {
      title: "メールアドレス",
      key: "email"
    },
    {
      title: "参加対象者",
      key: "participant"
    },
    {
      title: "参加費",
      key: "fee"
    },
    {
      title: "開催頻度",
      key: "frequency"
    },
    {
      title: "開催曜日",
      key: "dayOfWeek"
    },
    {
      title: "HP・ブログ",
      key: "hpBlog"
    },
    {
      title: "Twitter",
      key: "twitter"
    },
    {
      title: "facebook",
      key: "facebook"
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
            mgCommInfoItems.map((item) => {
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
                      itemKey === "location" ||
                      itemKey === "email" ||
                      itemKey === "fee" ||
                      itemKey === "frequency" ||
                      itemKey === "dayOfWeek" ||
                      itemKey === "hpBlog" ||
                      itemKey === "twitter" ||
                      itemKey === "participant" ||
                      itemKey === "facebook"
                      ) &&
                      <p>
                      {!(commData === null) &&
                      commData[itemKey] }
                    </p>
                  }
                  {/* {
                    itemKey === "participant" &&
                    <ul>
                      {
                        !(commData === null) &&
                        commData[itemKey].map((i) => 
                          <li key={i}>{i}</li>
                        )
                      }
                    </ul>
                  } */}
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
            dataKey === "location" ||
            dataKey === "email" ||
            dataKey === "fee" ||
            dataKey === "frequency" ||
            dataKey === "dayOfWeek" ||
            dataKey === "hpBlog" ||
            dataKey === "facebook" ||
            dataKey === "twitter" ?
            "input" :
            dataKey === "age" ||
            dataKey === "sex" ?
            "radio" :
            dataKey === "participant" ?
            "checkbox" :
            null
          }
          data={commData}
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

// /* eslint-disable @typescript-eslint/no-use-before-define */
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router';
// import styled from 'styled-components';
// import { db } from '../../firebase/config';

// export const MgCommInfo = ({commData}) => {
//   const q ="a"

//   return (
//     <Wrapper>
//       <h3>基本情報</h3>
//       <ul>
//         <li id={!(commData?.location) && "unCompletedInfo"}>
//           <h3>
//             <i className="fas fa-map-marker-alt"/>
//             開催場所
//           </h3>
//           <p>{commData?.location && commData.location}</p>
//           <p>{!(commData?.location) && "未登録"}</p>
//         </li>
//         <li id={!(commData?.email) && "unCompletedInfo"}>
//           <h3>
//             <i className="far fa-envelope"/>
//             メールアドレス
//           </h3>
//           <p>{commData?.email && commData.email}</p>
//           <p>{!(commData?.email) && "未登録"}</p>
//         </li>
//         <li id={!(commData?.participant) && "unCompletedInfo"}>
//           <h3>
//             <i className="far fa-user"/>
//             参加対象者
//           </h3>
//           <ul>
//             {
//               commData?.participant && commData?.participant.map((item) =>
//                 <li key={item}>{item}</li>
//               )
//             }
//           </ul>
//           <p>{!(commData?.participant) && "未登録"}</p>
//         </li>
//         <li id={!(commData?.fee) && "unCompletedInfo"}>
//           <h3>
//             <i className="fas fa-yen-sign"/>
//             参加費
//           </h3>
//           <p>{commData?.fee && commData.fee}</p>
//           <p>{!(commData?.fee) && "未登録"}</p>
//         </li>
//         <li id={!(commData?.frequency) && "unCompletedInfo"}>
//           <h3>
//             <i className="far fa-calendar-alt"/>
//             開催頻度
//           </h3>
//           <p>{commData?.frequency && commData.frequency}</p>
//           <p>{!(commData?.frequency) && "未登録"}</p>
//         </li>
//         <li id={!(commData?.dayOfWeek) && "unCompletedInfo"}>
//           <h3>
//             <i className="fas fa-calendar-week"/>
//             開催曜日
//           </h3>
//           <p>{commData?.dayOfWeek && commData.dayOfWeek}</p>
//           <p>{!(commData?.dayOfWeek) && "未登録"}</p>
//         </li>
//         <li id={!(commData?.website) && "unCompletedInfo"}>
//           <h3>
//             <i className="fas fa-globe"/>
//             HP・ブログ
//           </h3>
//           <p>{commData?.website && commData.website}</p>
//           <p>{!(commData?.website) && "未登録"}</p>
//         </li>
//         <li id={!(commData?.twitter) && "unCompletedInfo"}>
//           <h3>
//             <i className="fab fa-twitter"/>
//             Twitter
//           </h3>
//           <p>{commData?.twitter && commData.twitter}</p>
//           <p>{!(commData?.twitter) && "未登録"}</p>
//         </li>
//         <li id={!(commData?.facebook) && "unCompletedInfo"}>
//           <h3>
//             <i className="fab fa-facebook-f"/>
//             facebook
//           </h3>
//           <p>{commData?.facebook && commData.facebook}</p>
//           <p>{!(commData?.facebook) && "未登録"}</p>
//         </li>
//       </ul>
//     </Wrapper>
//   )
// }

// const Wrapper = styled.div`

// `