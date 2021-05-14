/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import styled, { css } from 'styled-components'

export const NotSignedIn = ({
  display
}) => {
  const a = "A"
  return (
    <Wrapper display={display}>
      <h1>you are not signned in!!</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  transition: all 0.3s ease;
  ${({ display }) => display || css`
    opacity: 0;
    pointer-events: none;
    height: 0;
    overflow-y: hidden;
  `}
`