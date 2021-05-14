import React from 'react'
import { useHistory } from 'react-router'
import { Button } from '../UIKit/Button'
import { SlideContent } from '../pageTop/SlideContent'
import { TACProps } from '../pageTop/TopAreaContent'


export const TopAreaContent4: React.FC<TACProps> = ({
  onClick
}) => {
  const history = useHistory()
  const toSignup = () => history.push("/signup")
  return (
    <SlideContent>
      <p>より良いサービス提供を行なっていくため、ともナビに関するご要望やサービス改善案を受け付けています。</p>
      <Button
        size="small"
        onClick={onClick}
        text="ご意見ボックス"
        backgroundColor="white"
        icon="forward"
        color="#333"
        borderColor="#333"
      />
    </SlideContent>
  )
}