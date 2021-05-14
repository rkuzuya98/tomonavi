/* eslint-disable no-use-before-define */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-cycle */
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Uid, UserData } from '../../App'
import { singUpAsync } from '../../asynchronous/signUpAsync'
import { ShrinkTextField } from '../form/ShrinkTextField '
import { Button } from '../UIKit/ButtonJ'


export const SignUpForm = () => {

  // 入力状態
  const [email, setEmail] = useState('')
  const emailHandler = (e) => setEmail(e.target.value)
  const [reEmail, setReEmail] = useState('')
  const reEmailHandler = (e) => setReEmail(e.target.value)
  const [password, setPassword] = useState('')
  const passwordHandler = (e) => setPassword(e.target.value)
  const [rePassword, setRePassword] = useState('')
  const rePasswordHandler = (e) =>
    setRePassword(e.target.value)

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
      jpn: 'メールアドレス(再入力)',
      eng: 'reEmail',
      onChange: reEmailHandler,
      type: 'email',
      value: reEmail,
    },
    {
      jpn: 'パスワード',
      eng: 'password',
      onChange: passwordHandler,
      type: 'password',
      value: password,
    },
    {
      jpn: 'パスワード(再入力)',
      eng: 'rePassword',
      onChange: rePasswordHandler,
      type: 'password',
      value: rePassword,
    },
  ]

  const history = useHistory()
  const toMyPage = (uid) => {
    const url = `/mypage/${uid}`
    history.push(url)
  }

  const [uid, setUid] = useContext(Uid)
  const [userData, setUserData] = useContext(UserData)


  return (
    <Wrapper>
      <h2>利用登録はこちら</h2>
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
        text="登録"
        onClick={
          (email === reEmail && password === rePassword) ?
          () => singUpAsync(email, password, setUid, setUserData, toMyPage) :
          () => alert("メールアドレス又はパスワードが一致していません")
        }
        backgroundColor="steelblue"
        icon="fas fa-chevron-left"
        color="white"
        validation={!(
          email === "" ||
          reEmail === "" ||
          password === "" ||
          rePassword === ""
        )}
      />
      <div>
        <p>
          ユーザー登録済みの方は
          <Link to="/signin">
            こちら
          </Link>
        </p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  & > h2 {
    font-weight: bold;
    margin-bottom: 35px;
  }
  & > div {
    margin-top: 20px;
    & > p {
      margin-top: 5px;
      font-weight: bold;
      font-size: 14px;
      & > a {
      color: steelblue;
      transition: all 0.3s ease;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`
