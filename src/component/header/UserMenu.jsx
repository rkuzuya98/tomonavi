/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { UserData } from '../../App'
import { CommingSoon } from '../UIKit/CommingSoon'

export const UserMenu = ({
  menu,
  handleMenu
}) => {
  // グローバルstate
  const [userData, setUserData] = useContext(UserData)

  // 
  const menuItems = [
    {
      name: "プロフィール",
      icon: "fas fa-info-circle"
    },
    {
      name: "お気に入り",
      icon: "fas fa-heart"
    },
    {
      name: "メッセージ",
      icon: "fas fa-comment-dots"
    },
    {
      name: "主催者ページ",
      icon: "fas fa-user-check"
    },
  ]

  return (
    <Wrapper
      menu={menu}
    >
      {/* 外側 */}
      <div
        onClick={handleMenu}
      />
      {/* 内側 */}
      <div>
        <button
            type="button"
            onClick={handleMenu}
          >
            <i className="fas fa-times"/>
        </button>
        <CommingSoon/>
        {/* {
          userData?.icon === undefined &&
          <p>not logged in</p>
        }
        {
          !(userData?.icon === undefined) &&
          <p>logged in</p>
        }
        <img
          src={userData?.icon}
          alt="img"
        />
        <p>{userData?.username}</p>
        <div>
          {
            menuItems.map((item) => 
              <button
                key={item.name}
                type="button"
              >
                <span>{item.name}</span>
                <i className={item.icon}/>
              </button>
            )
          }
        </div> */}
      </div>
      {/* {
            uid &&
            <Link
              to={`/mypage/${uid}`}
              onClick={handleMenu}
            >
                マイページ
            </Link>
          } */}
          {/* {
            !uid &&
            <Link
              to="/signin"
              onClick={handleMenu}
            >
              ログイン
            </Link>
          } */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  z-index: 120;
  /* 外側 */
  & > div:first-child {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    transition: all 0.3s ease;
    ${({ menu }) => !menu && css`
      opacity: 0;
      pointer-events: none;
    `}
  }
  /* 内側 */
  & > div:last-child {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 320px;
    bottom: 0;
    background-color: white;
    display: flex;
    flex-flow:  column;
    align-items: center;
    border-radius: 200px 0 0 0;
    transition: all 0.3s ease;
    ${({ menu }) => !menu && css`
      transform: translateX(320px);
      pointer-events: none;
    `}
    & > button {
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      height: 30px;
      background-color: rgba(0,0,0,0);
      border: none;
      transform: translate(-10px,10px);
      & > i {
        font-size: 40px;
        color: khaki;
      }
      transition: all 0.3s ease;
      ${({ menu }) => !menu && css`
        transform: translate(-420px,10px);
        pointer-events: none;
        opacity: 0;
      `}
    }
    & > img {
      width: 50%;
      height: 50vw;
      max-height: calc(320px * 50 / 100);
      border-radius: 50%;
      object-fit: cover;
      margin: 10px 0 10px 0;
    }
    & > p {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 30px;
    }
    & > div:nth-of-type(1) {
      /* width: 90%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      & > button {
        display: flex;
        flex-flow: column;
        align-items: center;
        background-color: white;
        & > i {
          font-size: 30px;
        }
        & > span {
          font-size: 18px;
        }
      } */
      margin-top: 150px;
    }
  }
`