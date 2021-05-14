import React from 'react'
import { useHistory } from 'react-router'
import { Button } from '../UIKit/Button'
import { SlideContent } from '../pageTop/SlideContent'

export const TopAreaContent3 = () => {
  const history = useHistory()
  const toSignup = () => history.push("/signup")
  return (
    <SlideContent>
      <p>パスワードをお忘れの方は、登録済みのメールアドレスに再設定用のメールを送信いたします。</p>
      <Button
        size="small"
        onClick={toSignup}
        text="アカウント再発行"
        backgroundColor="white"
        icon="forward"
        color="#333"
        borderColor="#333"
      />
    </SlideContent>
  )
}