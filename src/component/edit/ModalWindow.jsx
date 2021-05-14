/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Alert } from '../UIKit/Alert'

export const ModalWindow = ({
  display,
  handleDisplay,
  children
}) => {

  // リセット時に値を渡す
  const [reset, setReset] = useState(null)
  return (
    <Wrapper
      display={display}
    >
      <div
        onClick={() => {
          if (window.confirm("変更は保存されません")) {
            handleDisplay()
          }
        }}
      />
      <div>
        {children}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  & > div:first-child {
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.3);
    /* z-index: 10; */
  }
  & > div:last-child {
    position: fixed;
    top: 110px;
    left: 50px;
    bottom: 50px;
    right: 50px;
    background-color: white;
    /* z-index: 10; */
  }

  transition: all 0.3s ease;
  ${({ display }) => display || css`
    opacity: 0;
    pointer-events: none;
    height: 0;
    overflow-y: hidden;
  `};
`