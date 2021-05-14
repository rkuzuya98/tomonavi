import React from 'react'
import { useHistory } from 'react-router'
import { SlideContent } from '../pageTop/SlideContent'
import { ScrollType } from '../scroll/scrollType'
import { Button } from '../UIKit/Button'
import { TACProps } from '../pageTop/TopAreaContent'

export const TopAreaContent2: React.FC<TACProps> = ({
  onClick,
}) => {
  const history = useHistory()
  const toSignup = () => history.push("/signup")
  return (
    <SlideContent>
      <p>みなさまから多くいただくお問い合わせを「よくある質問」をまとめてあります。</p>
      <Button
        size="small"
        onClick={onClick}
        text="よくある質問"
        backgroundColor="white"
        icon="forward"
        color="#333"
        borderColor="#333"
      />
    </SlideContent>
  )
}