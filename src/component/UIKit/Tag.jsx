/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import styled from 'styled-components'

export const Tag = ({name}) => {
  const a = "a"
  return (
    <Wrapper>
      <p>{name}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-right: 10px;
  border-radius: 10px;
  padding: 0px 15px;
  height: 34px;
  background-color: darkkhaki;
  display: flex;
  align-items: center;
  & > p {
    color: white;
    font-weight: bold;
  }
`