import React from 'react'
import styled from 'styled-components'

export const AMark = () => <Wrapper>A</Wrapper>

const Wrapper = styled.span`
  background-color: white;
  border: 1px solid steelblue;
  color: steelblue;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`