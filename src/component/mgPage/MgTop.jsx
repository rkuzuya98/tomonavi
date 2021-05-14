/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/self-closing-comp */
import React from 'react'
import styled, { css } from 'styled-components'

export const MgTop = ({
  userData
}) => {
  const a = "a"
  return (
    <Wrapper
      icon={userData?.icon}
    >
      <h1>主催者ページ</h1>
      <div/>
      <h2>{userData?.username}</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  & > div {
    ${({ icon }) => icon && css`
      background-image: url(${icon});
    `};
    height: 100px;
    width: 100px;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    margin-bottom: 15px;
  }
  & > h2 {
    font-size: 16px;
    font-weight: bold;
  }
`