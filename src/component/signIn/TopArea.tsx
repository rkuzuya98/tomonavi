import React from 'react'
import { PageTop } from '../pageTop/PageTop'
import { TopAreaContent1 } from './TopAreaContent1'
import { TopAreaContent2 } from './TopAreaContent2'
import { TopAreaContent3 } from './TopAreaContent3'


export const TopArea = () =>
  <PageTop
    title="SIGN IN"
    subtitle="サインイン"
    image={{
      src: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2F101-unlock.svg?alt=media&token=0cf704be-e16f-4f54-87be-d4c04b3c8d39",
      alt: "signinImage"
    }}
    contents={[
      <TopAreaContent1 key="first"/>,
      <TopAreaContent2 key="second"/>,
      <TopAreaContent3 key="third"/>,
    ]}
    contentsHeight="120px"
  />