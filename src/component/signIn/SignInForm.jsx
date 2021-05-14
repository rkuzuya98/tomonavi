/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-cycle */
import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Uid, UserData } from '../../App'
import { singInAsync } from '../../asynchronous/signInAsync'
import { Button } from '../UIKit/ButtonJ'
import { ShrinkTextField } from '../form/ShrinkTextField '


export const SignInForm = () => {
  // 入力状態
  const [email, setEmail] = useState('')
  const emailHandler = (e) => setEmail(e.target.value)
  const [password, setPassword] = useState('')
  const passwordHandler = (e) => setPassword(e.target.value)

  // フォーム項目データ
  const formItems = [
    {
      jpn: 'メールアドレス',
      eng: 'email',
      onChange: emailHandler,
      type: 'email',
      value: email,
    },
    {
      jpn: 'パスワード',
      eng: 'password',
      onChange: passwordHandler,
      type: 'password',
      value: password,
    },
  ]
  // ページ遷移
  const history = useHistory()
  const toMyPage = (uid) => {
    const url = `/mypage/${uid}`
    history.push(url)
  }

  const [uid, setUid] = useContext(Uid)
  const [userData, setUserData] = useContext(UserData)

  return (
    <Wrapper>
      {/* <i className="fas fa-sign-in-alt"/> */}
      <h2>ログインはこちら</h2>
      <ul>
        {formItems.map((formItem) => (
          <li key={formItem.eng}>
            <ShrinkTextField
              label={formItem.jpn}
              onChange={formItem.onChange}
              type={formItem.type}
              value={formItem.value}
              />
          </li>
        ))}
      </ul>
      <Button
        icon=""
        text="ログイン"
        backgroundColor="steelblue"
        onClick={() => singInAsync(
          email,
          password,
          setUid,
          setUserData,
          toMyPage
          )}
          color="white"
          validation={!(email === "" || password === "")}
          />
      <div>
        <p>
          ユーザー登録がまだの方は
          <Link to="/signup">
            こちら
          </Link>
        </p>
        <p>
          ゲストログインは
          <span
            onClick={() => singInAsync(
              email,
              password,
              setUid,
              setUserData,
              toMyPage
              )}
          >
            こちら
          </span>
        </p>
        {/* <p>
          パスワードをお忘れの方は
          <Link to="/signup">
            こちら
          </Link>
        </p> */}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > h2 {
    font-weight: bold;
    margin-bottom: 50px;
  }
  & > div:nth-last-of-type(1) {
    font-weight: bold;
    margin-top: 25px;
    & > p {
      font-size: 14px;
      margin-top: 5px;
      & > a {
        color: steelblue;
      }
      & > span {
        color: steelblue;
      }
    }

  }
`