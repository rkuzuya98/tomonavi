import React from 'react'
import styled from 'styled-components'
import { AMark } from './AMark'
import { QMark } from './QMark'

type FAQQuestionProps = ({
  question: string
  answer: string
})

export const FAQQuestion: React.FC<FAQQuestionProps> = ({
  question,
  answer
}) => {
  const a = ""
  return (
    <Wrapper>
      <div>
        <QMark/>
        <p>{question}</p>
      </div>
      <div>
        <AMark/>
        <p>{answer}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 5px 5px;
  & > div {
    display: grid;
    grid-template-columns: 40px 1fr;
    /* align-items: center; */
    margin: 20px 0px;
    & > p {
      text-align: start;
    }
    &:first-child {
      & > p {
        transform: translateY(5px);
        font-size: 14px;
        font-weight: bold;
      }
    }
    &:last-child {
      margin-left: 20px;
      & > p {
        transform: translate(-2px,2px);
        font-size: 14px;
      }
    }
  }
`