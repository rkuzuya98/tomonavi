import React from 'react'
import styled from 'styled-components'

type SlideContentProps = ({
  children: React.ReactElement | React.ReactElement[]

})

export const SlideContent: React.FC<SlideContentProps> = ({
  children
}) =>
  <Wrapper>
    {children}
  </Wrapper>

const Wrapper = styled.div`
  & > p {
    color: #333;
    font-size: 14px;
  }
  & > button {
    margin-top: 10px;
  }
`