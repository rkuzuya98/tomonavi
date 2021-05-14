import React from 'react'
import styled, { css } from 'styled-components'
import { FAQQuestion } from './FAQQuestion'

type FAQQuestionsProps = ({
  questions: { q: string, a: string }[]
  display: boolean
})

export const FAQQuestions: React.FC<FAQQuestionsProps> = ({
  questions,
  display
}) => {
  const a = ""
  return (
    <Wrapper display={display}>
      <ul>
        {
          questions.map((question) => {
            const  c= "b"
            return (
              <li key={question.q}>
                <FAQQuestion
                  question={question.q}
                  answer={question.a}
                />
              </li>
            )
          })
        }
    </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div<{display: boolean}>`
  transition: all 0.2s ease;
  padding: 20px 0;
  ${({ display }) => !display && css`
    opacity: 0;
    padding: 0;
    height: 0;
    pointer-events: none;
    transform: translateY(-20px);
    transition: all 0.2s ease;
  `}
`