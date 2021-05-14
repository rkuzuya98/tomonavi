/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import styled from 'styled-components'

export const EditTextarea = ({
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
      <TextareaAutosize
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