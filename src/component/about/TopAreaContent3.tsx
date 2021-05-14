import React from 'react'
import { useHistory } from 'react-router'
import { Button } from '../UIKit/Button'
import { SlideContent } from '../pageTop/SlideContent'
import { TACProps } from '../pageTop/TopAreaContent'


export const TopAreaContent3: React.FC<TACProps> = ({
  onClick
}) => {
  const history = useHistory()
  const toSignup = () => history.push("/signup")
  return (
    <SlideContent>
      <p>ともナビに関するご不明な点がございましたらお気軽にお問い合わせください。</p>
      <Button
        size="small"
        onClick={onClick}
        text="お問い合わせフォーム"
        backgroundColor="white"
        icon="forward"
        color="#333"
        borderColor="#333"
      />
    </SlideContent>
  )
}