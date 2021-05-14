import React, { FC } from 'react'
import styled, { css } from 'styled-components'

type BlankSpaceProps = ({
  height: string
})

export const BlankSpace: FC<BlankSpaceProps> = ({
  height
}) =>
  <Wrapper
    height={height}
  />

const Wrapper = styled.div<{ height: string }>`
  ${({ height }) => height && css`
    height: ${height};
  `}
`
