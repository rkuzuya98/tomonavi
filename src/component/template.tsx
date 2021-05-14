import React from 'react'
import styled from 'styled-components'

export const template = () => {
  console.log('null')
  return <Wrapper>null</Wrapper>
}

const Wrapper = styled.div`
  border: none;
  transition: all 0.3s ease;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    opacity: 0.5;
  }
  & > p {
    height: 30px;
  }
  &:focus {
    outline: none;
    border: none;
  }
`
