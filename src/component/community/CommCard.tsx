/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { UserData } from '../../App'
import { updateFavorite } from '../../asynchronous/updateFavorite'

type CommCardProps = ({
  comm: any
  handleModal: VoidFunction
})

export const CommCard: React.FC<CommCardProps> = ({
  handleModal,

  comm
}) => {

  const updatedDate = comm?.updated_at?.toDate()
  const year = updatedDate?.getFullYear()
  const month = updatedDate?.getMonth() + 1
  const editedMonth = String(month).length === 1 ? `0${month}` : month
  const date = updatedDate?.getDate()
  const editedDate = String(Date).length === 1 ? `0${date}` : date
  const update = `${year}.${editedMonth}.${editedDate}`

  // グローバルstate
  const [userData, setUserData] = useContext(UserData)
  // 
  // const [favorite, setFavorite] = useState(userData?.favorites.includes(id))
  const [favorite, setFavorite] = useState(null)
  // const handleFavorite = () => setFavorite(!favorite)

  const history = useHistory()
  const toCommunity = () => history.push(`/community/${comm.url}`)

  // 初回レンダーの状態
  const isFirstRender  = useRef(false)


  // 初回レンダーのみ
  useEffect(() => {
    isFirstRender.current = true
  },[])

  useEffect(() => {
    console.log("useEFFECT!!!!!!!!!!!!")
    if (isFirstRender.current) {
      // 初回レンダー
      isFirstRender.current = false
    } else {
      // 2回目以降のレンダー
      updateFavorite(
        userData.id,
        comm.id,
        favorite,
      )
    }
  },[favorite, userData, comm.id])

  return (
    <Wrapper
      favorite={comm.favorite}
      logo={comm.logo}
      onClick={toCommunity}
    >
      <div>
        {/* ロゴ画像 */}
        <div/>
        {/* 主催者アイコン画像 */}
        {/* <img
          src={icon}
          alt="img"
        /> */}
        {/* お気に入りアイコン */}
        {/* <div
          onClick={
            userData ?
            handleFavorite :
            handleModal
          }
        >
          <i className="fas fa-heart"/>
          <i className="far fa-heart"/>
        </div> */}
      </div>
      {/* タイトル＆説明＆分野・テーマ＆開催場所 */}
      <div>
        <div>
          <p>{comm.name}</p>
          <p>{comm.summary}</p>
        </div>
        <div>
          {/* <p>分野・テーマ</p> */}
          <ul>
            {
              comm.theme.map((item: any) =>
                <li key={item}>
                  <p>{item}</p>
                </li>
              )
            }
          </ul>
          {/* <p>開催場所</p> */}
          <ul>
            {
              comm.place.map((item: any) =>
                <li key={item} style={{backgroundColor: "steelblue"}} >
                  <p>{item}</p>
                </li>
              )
            }
          </ul>
        </div>
        <div>
          <div/>
          <div>
            <i className="fas fa-heart"/>
            <span>{comm.favoriteNumber}</span>
          </div>
          <div/>
          <div>
            <i className="fas fa-award"/>
            <span>{`${comm.enrichment}%`}</span>
          </div>
          <div/>
          <div>
            <i className="fas fa-history"/>
            <span>{update}</span>
          </div>
          <div/>
        </div>
      </div>
    </Wrapper>
  )
}

type WrapperProps = ({
  logo: string
  favorite: boolean | null
})

const Wrapper = styled.div<WrapperProps>`
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 5px;
  transition: all 0.3s ease;
  margin: 20px 0;
  width: 100%;
  &:hover {
    transform: scale(1.02);
  }
  /* 画像 */
  & > div:nth-of-type(1) {
    position: relative;
    /* ロゴ画像 */
    & > div:nth-of-type(1) {
      ${({ logo }) => logo && css`
        background-image: url(${logo});
      `};
      background-color: yellow;
      width: 100%;
      height: 0px;
      padding-top: calc(900 / 1600 * 100%);
      background-size: cover;
      background-position: center;
    }
    /* 主催者アイコン画像 */
    & > img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(-30%,35%);
      border: 2px solid white;
    }
    /* お気に入りアイコン */
    & > div:nth-of-type(2) {
      & > i {
        position: absolute;
        left: 30px;
        top: 30px;
        transform: translate(-50%,-50%);
        &:first-child {
          font-size: 35px;
          color: rgba(0,0,0,0.7);
          ${({ favorite }) => favorite && css`
            color: salmon;
          `};
        }
        &:last-child {
          color: white;
          font-size: 40px;
        }
      }
    }
  }
  /* タイトル＆説明＆分野・テーマ＆開催場所 */
  & > div:nth-of-type(2)  {
    /* コミュニティ名 */
    & > div:nth-of-type(1) {
      padding: 15px 20px;
      /* background-color: khaki; */
      & > p {
        margin-top: 5px;
        text-align: left;
        font-weight: bold;
        color: rgba(0,0,0,0.7);
        &:nth-child(1) {
          font-size: 18px;
        }
        &:nth-child(2) {
          font-size: 14px;
        }
      }
    }

    /* テーマ・分野＆場所エリア */
    & > div:nth-of-type(2) {
      border-radius: 0 0 5px 5px;
      padding: 15px 20px;
      & > p {
        margin: 0 0 5px 5px;
        font-size: 14px;
        font-weight: bold;
        text-align: left;
        & > i {
          margin-left: 2px;
        }
        &:nth-of-type(1) {
          color: darkkhaki;
        }
        &:nth-of-type(2) {
          color: darkkhaki;
        }
      }
      /* テーマ・分野＆場所 */
      & > ul {
        display: flex;
        align-items: center;
        & > i {
          color: red;
        }
        & > li {
          height: 25px;
          display: flex;
          align-items: center;
          padding: 4px 15px;
          border-radius: 12px;
          margin-right: 5px;
          color: white;
          & > p {
            color: white;
            font-size: 14px;
            font-weight: bold;
          }
        }

        /* テーマ・分野 */
        &:nth-of-type(1) {
          margin-bottom: 15px;
          & > li {
            background-color: darkkhaki;
          }
        }
        /* 場所 */
        &:nth-of-type(2) {
          & > li {
            background-color: darkkhaki;
          }
        }
      }
    }
    & > div:nth-of-type(3) {
      display: flex;
      justify-content: space-around;
      background-color: aliceblue;
      align-items: center;
      padding: 13px 5px;
      & > div {
        & > i {
          font-size: 14px;
          margin-right: 5px;
          color: steelblue;
        }
        & > span {
          font-size: 14px;
          color: steelblue;
          font-weight: bold;
        }
        &:nth-child(odd) {
          height: 12px;
          width: 2px;
          background-color: steelblue;
        }
        &:first-child, &:last-child {
          width: 0px;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 4fr 6fr;
    & > div:nth-of-type(1) {
      /* ロゴ画像 */
      & > div:nth-of-type(1) {
        height: 100%;
        padding: 0;
      }
      /* 主催者アイコン画像 */
      & > img {
        transform: translate(-20%,-20%);
      }
    }
  }
`