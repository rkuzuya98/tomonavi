/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import styled from 'styled-components'

export const CommingSoon = () => {
  const a = "a"
  return (
    <Wrapper>
      <p>現在準備中です</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin: 20px 0;
  /* border: 1px solid steelblue; */
  background-color: khaki;
  padding: 5px;
  border-radius: 10px;
  & > p {
    font-weight: bold;
    border: 2px solid white;
    padding: 40px 60px;
    border-radius: 10px;
    font-size: 20px;
    

  }

`