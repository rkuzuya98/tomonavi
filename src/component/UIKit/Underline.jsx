/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import styled, { css } from 'styled-components'

export const Underline = ({
  color
}) => {
  console.log(color)
  return (
    <Wrapper
      color={color}
    />
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 2px;
  ${({color}) => color && css`
    background: linear-gradient(0.25turn, ${color} 60%, white 90%);
  `};
`