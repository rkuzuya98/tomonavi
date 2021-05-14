/* eslint-disable import/no-cycle */
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Uid, UserData } from '../../App'
import { singUpAsync } from '../../asynchronous/signUpAsync'
import { ShrinkTextField } from '../form/ShrinkTextField '
import { Button } from '../UIKit/ButtonJ'
import { SignInOptions } from './SignInOptions'
import { TextField } from '../form/TextField';
import { BlankSpace } from '../UIKit/BlankSpace'
import { singInAsync } from '../../asynchronous/signInAsync'
import { OtherSignInOptions } from './OtherSignInOptions'



export const EmailForm = () => {

  // 入力状態
  const [email, setEmail] = useState('')
  const emailHandler = (e: React.KeyboardEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
  const [password, setPassword] = useState('')
  const passwordHandler = (e: React.KeyboardEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)

  // フォーム項目データ
  const formItems = [
    {
      jpn: 'メールアドレス',
      eng: 'email',
      onChange: emailHandler,
      type: 'email',
      value: email,
      // supp: "メールアドレスが他のユーザーに見られることはありません"
    },
    {
      jpn: 'パスワード',
      eng: 'password',
      onChange: passwordHandler,
      type: 'password',
      value: password,
      // supp: "英数字を含む12文字以上をご入力ください"
    },
  ]

    // ページ遷移
    const history = useHistory()
    const toMyPage = (uid: string) => {
      const url = `/mypage/${uid}`
      history.push(url)
    }
  
    const [uid, setUid] = useContext(Uid)
    const [userData, setUserData] = useContext(UserData)

  return (
    <Wrapper>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/icon%2FmailIcon.svg?alt=media&token=9667c1a7-06b2-4a82-bf4c-0e28c5fa21ee"
        alt="emailLogo"
      />
      <p>メールアドレスでログイン</p>
      <ul>
        {formItems.map((formItem) => (
          <li key={formItem.eng}>
            <TextField
              label={formItem.jpn}
              onChange={formItem.onChange}
              type={formItem.type}
              value={formItem.value}
              // supp={formItem.supp}
            />
          </li>
        ))}
      </ul>
      <BlankSpace height="10px"/>
      <Button
        text="同意して登録"
        onClick={
        () => singInAsync(
          email,
          password,
          setUid,
          setUserData,
          toMyPage
          )
        }
        backgroundColor="steelblue"
        icon="fas fa-chevron-left"
        color="white"
        validation={!(email === "" || password === "")}
      />
      <OtherSignInOptions/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  max-width: 300px;
  & > img {
    width: 40px;
    margin-bottom: 20px;
  }
  & > p {
    font-weight: bold;
    margin-bottom: 35px;
  }
`
