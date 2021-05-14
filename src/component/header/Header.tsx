/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Uid } from '../../App'
import { BurgerMenu } from './BurgerMenu'
import { UserMenu } from './UserMenu'

export const Header = () => {
  const [uid] = useContext(Uid)
  
  // ハンバーガーメニューの状態
  const [burgerMenu, setBurgerMenu] = useState(false)
  const handleBurgerMenu = () => setBurgerMenu(!burgerMenu)
  // ユーザーメニューの状態
  const [userMenu, setUserMenu] = useState(false)
  const handleUserMenu = () => setUserMenu(!userMenu)


  return (
    <Wrapper>
      <div/>
      <i 
        className="fas fa-bars"
        onClick={handleBurgerMenu}
      />
      <Link to="/">
        <img
          alt="logo"
          src="https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/logo%2FtomonaviPreLogo2.png?alt=media&token=6b850c15-65a8-40f3-82df-6c4be3c78f1d"
        />
      </Link>
      {/* <Menu />
      {uid ? (
        // ログイン状態
        <Link to={`/mypage/${uid}`}>マイページ</Link>
      ) : (
        // ログアウト状態
        <Link to="/signin">ログイン</Link>
      )} */}
      <div/>
      <i
        className="fas fa-user-circle"
        onClick={handleUserMenu}
      />
      <div/>
      <BurgerMenu
        menu={burgerMenu}
        handleMenu={handleBurgerMenu}
      />
      <UserMenu
        menu={userMenu}
        handleMenu={handleUserMenu}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 60px;
  display: grid;
  grid-template-columns: 20px 40px 1fr 10px 40px 10px 0px 0px;
  align-items: center;
  background-color: white;
  box-shadow: 1px 2px 3px -2px gray;
  z-index: 100;
  & > a {
    text-align: center;
    & > img {
      height: 40px;
      margin-left: 20px;
    }
  }
  & > i {
    font-size: 30px;
    color: white;
    color: steelblue;
  }
`
