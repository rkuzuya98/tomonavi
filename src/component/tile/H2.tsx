import React from 'react'
import styled from 'styled-components'

type H2Props = ({
  h2: string
  p?: string
})

export const H2: React.FC<H2Props> = ({
  h2,
  p
}) => {
  const a = ""
  return (
    <Wrapper>
      <h2>{h2}</h2>
      {
        p &&
        <div>
          <p>{p}</p>
        </div>
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > h2 {
    font-weight: bold;
    margin-bottom: 10px;
  }
  & > div {
    margin-bottom: 40px;
    & > p {
      display: inline-block;
      font-size: 14px;
      text-align: start;
    }
  }
`