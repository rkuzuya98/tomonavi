import React from 'react'
import { useHistory } from 'react-router'
import { SlideContent } from '../pageTop/SlideContent'
import { Button } from '../UIKit/Button'

export const TopAreaContent2 = () => {
  const history = useHistory()
  const toSignup = () => history.push("/signup")
  return (
    <SlideContent>
      <p>ユーザー登録の手順についてはこちらのページにて詳しく説明しています。</p>
      <Button
        size="small"
        onClick={toSignup}
        text="ユーザー登録"
        backgroundColor="white"
        icon="forward"
        color="#333"
        borderColor="#333"
      />
    </SlideContent>
  )
}