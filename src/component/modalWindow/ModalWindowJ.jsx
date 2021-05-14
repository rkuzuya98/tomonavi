/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import { useHistory } from 'react-router'
import styled, { css } from 'styled-components'

export const ModalWindow = ({
  handleModal,
  favModal
}) => {
  console.log("a")
  const history = useHistory()
  const toSignIn = () => history.push("/signin")
  const toSignUp = () => history.push("/signup")
  return (
    <Wrapper
      favModal={favModal}
    >
      <div
        onClick={handleModal}
      />
      <div>
        <i 
          className="fas fa-times"
          onClick={handleModal}
        />
        <h1>お気に入り機能</h1>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2FPasted%20Graphic.png?alt=media&token=4023b2f7-2874-4a1c-8440-4ad7215ba9a5"
          alt="favoriteImage"
        />
        <p>興味のあるコミュニティを</p>
        <p>いつでも確認できる！</p>
        <div/>
        <div>
          <div>
            <p>お気に入り機能の利用には</p>
            <p>ログインが必要です</p>
            <button
              type="button"
              onClick={toSignIn}
            >
              ログイン
              <i className="fas fa-chevron-right"/>
            </button>
          </div>
          <div>
            <p>登録がまだの方はこちら</p>
            <button
              type="button"
              onClick={toSignUp}
            >
              アカウント登録
              <i className="fas fa-chevron-right"/>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > div:first-child {
    position: fixed;
    background-color: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  & > div:last-child {
    position: fixed;
    background-color: white;
    top: 55%;
    transform: translateY(-50%);
    left: 20px;
    /* bottom: 50px; */
    height: auto;
    right: 20px;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 20px;
    border: 7px solid khaki;
    text-align: center;
    padding: 20px 0;
    z-index: 100;
    & > i {
      position: absolute;
      top: 5px;
      right: 10px;
      font-size: 40px;
      color: khaki;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        opacity: 0.5;
      }
    }
    & > h1 {
      margin-bottom: 20px;
    }
    & > img {
      width: 35%;
      max-width: 140px;
    }
    & > p {
      font-weight: bold;
    }
    & > div:nth-of-type(1) {
      background-color: khaki;
      height: 2px;
      width: 80%;
      margin: 10px auto;
    }
    & > div:nth-of-type(2) {
      & > div {
        margin-top: 20px;
        & > p {
          font-weight: bold;
          font-size: 14px;
        }
        & > button {
          width: 70%;
          background-color: white;
          border: 2px solid steelblue;
          border-radius: 10px;
          color: steelblue;
          padding: 10px 0;
          margin-top: 5px;
          position: relative;
          max-width: 300px;
          transition: all 0.3s ease; 
          & > i {
            transition: all 0.3s ease; 
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: steelblue;
          }
          &:hover {
            background-color: steelblue;
            color: white;
            & > i {
              color: white;
            }
          }
        }
      }
    }
  }
  transition: all 0.5s ease;
  ${({favModal}) => !favModal && css`
    opacity: 0;
    pointer-events: none;
  `};
`