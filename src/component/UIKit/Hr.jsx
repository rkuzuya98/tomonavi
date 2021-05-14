/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import styled, { css } from 'styled-components'

export const Hr = ({
  width,
  backgroundColor,
  height,
  margin
}) => {
  const a = "a"
  return (
    <Wrapper
      width={width}
      backgroundColor={backgroundColor}
      height={height}
      margin={margin}
    />
  )
}

const Wrapper = styled.div`
  width: 90%;
  ${({ width }) => width && css`
    width: ${width};
  `};
  background-color: rgba(0,0,0,0.15);
  ${({ backgroundColor }) => backgroundColor && css`
    background-color: ${backgroundColor};
  `};
  height: 1px;

  ${({ margin }) => margin && css`
    margin: ${margin} 0;
  `};
  
`