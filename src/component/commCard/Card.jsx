/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Uid, UserData } from '../../App'
import { updateFavorite } from '../../asynchronous/updateFavorite'

export const Card = ({
  name,
  summary,
  theme,
  place,
  logo,
  icon,
  update,
  favoriteNumber,
  enrichment,
  id,
  handleModal,
  url,

  comm
}) => {
  // グローバルstate
  const [userData, setUserData] = useContext(UserData)
  // 
  // const [favorite, setFavorite] = useState(userData?.favorites.includes(id))
  const [favorite, setFavorite] = useState(null)
  const handleFavorite = () => setFavorite(!favorite)

  const history = useHistory()
  const toCommunity = () => history.push(`/community/${url}`)

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
        id,
        favorite,
      )
    }
  },[favorite, userData, id])

  return (
    <Wrapper
      favorite={favorite}
      logo={logo}
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
          <p>{name}</p>
          <p>{summary}</p>
        </div>
        <div>
          {/* <p>分野・テーマ</p> */}
          <ul>
            {
              theme.map((item) =>
                <li key={item}>
                  <p>{item}</p>
                </li>
              )
            }
          </ul>
          {/* <p>開催場所</p> */}
          <ul>
            {
              place.map((item) =>
                <li key={item}>
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
            <span>{favoriteNumber}</span>
          </div>
          <div/>
          <div>
            <i className="fas fa-award"/>
            <span>{`${enrichment}%`}</span>
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

const Wrapper = styled.div`
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