/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import styled, { css } from 'styled-components'

type Props = ({
  display: boolean
  handleDisplay: VoidFunction
})

export const ModalWindow: React.FC<Props> = ({
  display,
  handleDisplay,
  children
}) =>
    <Wrapper display={display}>
      {/* 外側 */}
      <div
        onClick={() => {
          if (window.confirm("変更は保存されません")) {
            handleDisplay()
            console.log("hello")
          }
        }}
      />
      {/* 内側 */}
      <div>
        {children}
      </div>
    </Wrapper>

type WrapperProps = ({
  display: boolean
})

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  z-index: 10;
  /* 外側 */
  & > div:first-child {
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.3);
  }
  /* 内側 */
  & > div:last-child {
    position: fixed;
    top: 70px;
    left: 10px;
    bottom: 10px;
    right: 10px;
    background-color: white;
    border-radius: 20px;
  }
  /* 開閉処理 */
  transition: all 0.3s ease;
  ${({ display }) => !display && css`
    opacity: 0;
    pointer-events: none;
    height: 0;
    overflow-y: hidden;
  `};
`