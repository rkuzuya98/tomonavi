import React, { useState } from 'react'
import styled, { css } from 'styled-components'

type AlertProps = ({
  nextFunction: VoidFunction
})

export const Alert: React.FC<AlertProps> = ({
  nextFunction
}) => {
  const [display, setDisplay] = useState(true)
  const handleDisplay = () => setDisplay(!display)
  return (
    <Wrapper
      display={display}
    >
      <button
        type="button"
        onClick={() => {
          nextFunction()
          handleDisplay()
        }}
      >
        本当に良い？
      </button>
      <button
        type="button"
        onClick={handleDisplay}
      >
        戻る
      </button>
    </Wrapper>
  )
}

type WrapperProps = ({
  display: boolean
})

const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  top: 300px;
  ${({ display }) => !display && css`
    opacity: 0;
    pointer-events: none;
  `};
`
