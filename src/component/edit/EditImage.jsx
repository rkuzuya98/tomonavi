/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { CommingSoon } from '../UIKit/CommingSoon'

export const EditImage = ({
  value,
  reset,
  handleReset,
  handleUpdatingData
}) => {
  
  // リセット発動時にリセット処理を行う
  useEffect(() => {
    reset !== null && handleUpdatingData(reset)
    handleReset(null)
  },[handleReset, handleUpdatingData, reset])

  return (
    <Wrapper>
      {/* <p>image</p>
      <input
        value={value}
        onChange={(e) => {
          handleUpdatingData(e.target.value)
        }}
      /> */}
      <CommingSoon/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > input {
    
  }
`