/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/self-closing-comp */
import React from 'react'
import { Slider } from '../slider/Slider'
import { PageTop } from '../UIKit/PageTop'

export const SignUpIntro = () => {
  const a = "a"
  return (
    <Slider>
      <PageTop
        title="ユーザー登録"
        image={{
          src: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2F101-unlock.svg?alt=media&token=0cf704be-e16f-4f54-87be-d4c04b3c8d39",
          alt: "signinImage"
        }}
        explanation={[
          "ともナビにログインすることで「マイページ」や「お気に入り登録」、「主催者とのチャット」といった様々な機能を利用することができます。",
        ]}
      />
      <PageTop
        title="ログイン"
        image={{
          src: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2F101-unlock.svg?alt=media&token=0cf704be-e16f-4f54-87be-d4c04b3c8d39",
          alt: "signinImage"
        }}
        explanation={[
          "すでにアカウントを作成済みの方はこちらから！",
        ]}
        button={{
          text: "ログイン",
          url: "/signin"
        }}
      />
    </Slider>
  )
}