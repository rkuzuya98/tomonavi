/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Uid, UserData } from '../../App'
import { singOutAsync } from '../../asynchronous/signOutAsync'

export const BurgerMenu = ({
  menu,
  handleMenu
}) => {
  // グローバルstate
  const [uid, setUid] = useContext(Uid)
  const [userData, setUserData] = useContext(UserData)

  const history = useHistory()
  const toHome = () => history.push("/")
  const toCommunity = () => history.push("/community")
  const toGather = () => history.push("/gather")
  const toContact = () => history.push("/contact")
  const toAbout = () => history.push("/about")
  const toSignin = () => history.push("/signin")
  const toSignup = () => history.push("/signup")
  const toMypage = () => history.push(`/mypage/${uid}`)
  const toManager = () => history.push("/maneger")

  const menuItems = [
    {
      title: ["コミュニティを","見つける"],
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2F049-choices-colour.svg?alt=media&token=000c280e-c1f8-4a81-85da-fa407341f9ee",
      imageAlt: "findImage",
      toPage: toCommunity
    },
    {
      title: ["コミュニティを","広める"],
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2F001-drawkit-content-man-colour.svg?alt=media&token=478bcd9f-437f-4159-94cd-6ed5c04582f9",
      imageAlt: "gatherImage",
      toPage: toGather
    },
    {
      title: ["ともナビとは"],
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2F059-support-notes-colour.svg?alt=media&token=84d307e0-6fb3-4f2f-ae75-9d615176ab99",
      imageAlt: "aboutImage",
      toPage: toAbout
    },
    {
      title: ["利用登録"],
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2F103-social-feed-colour.svg?alt=media&token=1389c7c0-ec1f-425b-9cdf-09c44529a23c",
      imageAlt: "signupImage",
      toPage: toSignup
    },
    {
      title: ["ログイン"],
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2F101-unlock.svg?alt=media&token=0cf704be-e16f-4f54-87be-d4c04b3c8d39",
      imageAlt: "signinImage",
      toPage: toSignin
    },
    {
      title: ["お問い合わせ"],
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2F017-drawkit-support-woman-colour.svg?alt=media&token=e2f2bce1-1264-4f4f-8f23-fac9b21c129d",
      imageAlt: "contactImage",
      toPage: toContact
    },
    {
      title: ["マイページ"],
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2F103-social-feed-colour.svg?alt=media&token=1389c7c0-ec1f-425b-9cdf-09c44529a23c",
      imageAlt: "mypageImage",
      toPage: toMypage
    },
    {
      title: ["主催者ページ"],
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2F017-drawkit-support-woman-colour.svg?alt=media&token=e2f2bce1-1264-4f4f-8f23-fac9b21c129d",
      imageAlt: "managerImage",
      toPage: toContact
    },
    {
      title: ["ログアウト"],
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2F017-drawkit-support-woman-colour.svg?alt=media&token=e2f2bce1-1264-4f4f-8f23-fac9b21c129d",
      imageAlt: "logoutImage",

      toPage: () => singOutAsync(toHome)
    },
  ]

  const signedOutMenuItems = [
    "findImage",
    "gatherImage",
    "aboutImage",
    "signupImage",
    "signinImage",
    "contactImage",
  ]

  const signedInMenuItems = [
    "findImage",
    "gatherImage",
    "aboutImage",
    "contactImage",
    "mypageImage",
    "logoutImage"
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
        <img
          alt="logo"
          src="https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/logo%2FtomonaviPreLogo2.png?alt=media&token=6b850c15-65a8-40f3-82df-6c4be3c78f1d"
        />
        <div>
          <p>
            <i className="fas fa-hashtag"/>
            <span>セルフケア</span>
          </p>
          <p>
            <i className="fas fa-hashtag"/>
            <span>コミュニティ</span>
          </p>
          <p>
            <i className="fas fa-hashtag"/>
            <span>ポータルサイト</span>
          </p>
        </div>
        <div>
          {
            menuItems.map((item) => {
              const sortedItems = uid ? signedInMenuItems : signedOutMenuItems
              return (
                sortedItems.includes(item.imageAlt) ?
                <button
                  key={item.imageAlt}
                  type="button"
                  onClick={
                    () => {
                      item.toPage()
                      handleMenu()
                    }
                  }
                >
                  <img
                    alt={item.imageAlt}
                    src={item.image}
                  />
                  <div>
                    {
                      item.title.map((i) =>
                        <p key={i}>{i}</p>
                      )
                    }
                  </div>
                  <i className="fas fa-chevron-right"/>
                </button> :
                null
              )
            }
            )
          }
        </div>
      </div>
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
    left: 0;
    width: 100%;
    max-width: 320px;
    bottom: 0;
    background-color: white;
    display: flex;
    flex-flow:  column;
    align-items: center;
    border-radius: 0 200px 0 0;
    box-sizing: border-box;
    border-top: 5px solid khaki;
    border-right: 5px solid khaki;
    & > button {
      position: absolute;
      top: 0;
      right: 0;
      width: 30px;
      height: 30px;
      background-color: rgba(0,0,0,0);
      border: none;
      transform: translate(-10px,10px);
      transition: all 0.3s ease;
      &:focus {
        outline: none;
      }
      &:hover {
        opacity: 0.5;
      }
      & > i {
        font-size: 40px;
        color: khaki;
      }
      transition: all 0.3s ease;
      ${({ menu }) => !menu && css`
        transform: translate(420px,10px);
        pointer-events: none;
        opacity: 0;
      `}
    }
    & > img {
      z-index: 130;
      width: 100px;
      transform: translateX(-80px);
      margin: 20px 0;
    }
    transition: all 0.3s ease;
    ${({ menu }) => !menu && css`
      transform: translateX(-320px);
      pointer-events: none;
    `}
    & > div:nth-of-type(1) {
      z-index: 130;
      margin-bottom: 20px;
      margin-right: 40%;
      & > p {
        & > i {
          margin-right: 4px;
          color: steelblue;
        }
        & > span {
          font-weight: bold;
          color: steelblue;
        }
      }
    }
    & > div:nth-of-type(2) {
      width: 80%;
      overflow: scroll;
      & > button {
        width: 100%;
        background-color: white;
        border: none;
        border-top: 2px solid rgba(0,0,0,0.05);
        padding: 15px 0;
        display: grid;
        grid-template-columns: 0.2fr 0.8fr;
        gap: 10px;
        align-items: center;
        position: relative;
        transition: all 0.3s ease;
        &:focus {
          outline: none;
          opacity: 0.5;
        }
        &:hover {
          opacity: 0.5;
        }
        & > img {
        }
        & > div {
          & > p {
            &:first-child {
              font-size: 14px
            }
            &:last-child {
              font-size: 18px
            }
          }
        }
        & > i {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: steelblue;
        }
        &:last-child {
          border-bottom: 2px solid rgba(0,0,0,0.05);
        }
      }
    }
  }


`