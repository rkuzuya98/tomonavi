/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect } from 'react'
import styled from 'styled-components'

export const EditInput = ({
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
      <input
        value={value}
        onChange={(e) => {
          handleUpdatingData(e.target.value)
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > input {
    
  }
`