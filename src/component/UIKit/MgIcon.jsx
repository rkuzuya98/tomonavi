/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import styled, { css } from 'styled-components'

export const MgIcon = ({
  img,
  name
}) => {
  const a = "a"
  return (
    <Wrapper img={img}>
      <div/>
      <p>{name}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 5px;
  align-items: center;
  border: 2px solid darkkhaki;
  border-radius: 10px;
  padding: 5px;
  background-color: white;
  & > div {
    ${({ img }) => img && css`
      background-image: url(${img});
    `};
    width: 36px;
    height: 36px;
    background-size: cover;
    background-position: center;
  }
  & > p {
    font-weight: bold;
    padding-right: 5px;
    /* color: white; */
  }
`