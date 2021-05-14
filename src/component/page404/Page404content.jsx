/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/self-closing-comp */
import React from 'react'
import { PageTop } from '../UIKit/PageTop'

export const Page404content = () => {
  const a = "a"
  return (
    <PageTop
      title="お探しのページが見つかりません"
      image={{
        src: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2F039-error-404-colour.svg?alt=media&token=f40fe42f-24b9-4ee6-90ec-296b8341ca02",
        alt: "404img"
      }}
      explnation={[
        "既にページが削除されているか、URLが正しくない可能性があります。",
      ]}
    />
  )
}