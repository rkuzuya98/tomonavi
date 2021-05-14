/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { NarrowTop } from '../community/NarrowTop'

type Props = ({
  display: boolean
  handleDisplay: VoidFunction
})

export const UpperWindow: React.FC<Props> = ({
  display,
  handleDisplay,
  children
}) => {

  // モーダル表示中は背面のスクロール禁止
  useEffect(() => {
    const body = document.querySelector('body')
    if (display && body) {
      body.style.overflow = "hidden"
    } else if (!display && body) {
      body.style.overflow = "visible"
    }
  }, [display])

  return (
    <Wrapper display={display}>
      {/* 外側 */}
      <div/>
      {/* 内側 */}
      <div>
        <div>
          {/* <h1>hello</h1> */}
          {/* <div> */}
            {children}
          {/* </div> */}
        </div>
      </div>
    </Wrapper>
  )
}

type WrapperProps = ({
  display: boolean
})

const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  ${({ display }) => !display && css`
    pointer-events: none;
  `};
  & > div {
    /* 外側 */
    &:first-child {
      background-color: rgba(0,0,0,0.3);
      height: 100%;
      transition: all 0.3s ease;
      ${({ display }) => !display && css`
        opacity: 0;
        pointer-events: none;
      `};
    }
    /* 内側 */
    &:last-child {
      background-color: white;
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      transform: translateY(0px);
      border-top: 5px solid rgba(70, 130, 180, 0.5);
      transition: all 0.3s ease;

      ${({ display }) => !display && css`
        opacity: 0;
        pointer-events: none;
        transform: translateY(500px);
      `};
      & > div {
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        /* & > div {
          background-color: red;
          overflow-y: scroll;
          height: 100%;
        } */
      }
      & > i {
        color: red;
        position: absolute;
      }
    }
  }
`