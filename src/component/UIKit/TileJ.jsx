/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import styled, { css } from 'styled-components'
import DotsLoader from '../loading/DotsLoader'

export const Tile = ({
  children,
  maxWidth,
  loading,
  paddingBottom
}) =>
  <>
  <Wrapper
    maxWidth={maxWidth}
    loading={loading}
    paddingBottom={paddingBottom}
  >
    <DotsLoader loading={loading} id="dotsLoader"/>
    <div>
      {children}
    </div>
  </Wrapper>
  </>

const Wrapper = styled.div`
  margin: 10px 5px;
  max-width: 1000px;
  background-color: white;
  border-radius: 10px;

  ${({ maxWidth }) => maxWidth && css`
    max-width: ${maxWidth};
  `};

  & > div:last-child {
    padding: 60px 0 60px 0;
    ${({ paddingBottom }) => paddingBottom && css`
      padding-bottom: ${paddingBottom};
    `};
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;
    background-color: white;
    border-radius: 20px;
    transition: all 0.5s ease;
    ${({ loading }) => loading && css`
      opacity: 0;
      height: 100px;
      overflow: hidden;
    `};
  }

  @media screen and (min-width: 600px) {
    margin: 20px 20px;
  }
  /* @media screen and (min-width: 768px) {
    margin: 20px 20px;
  } */
  @media screen and (min-width: 1010px) {
    margin: 20px auto;
  }
`