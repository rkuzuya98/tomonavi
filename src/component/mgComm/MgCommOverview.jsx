/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import styled from 'styled-components'

export const MgCommOverview = ({commData}) => {
  const a = "a"
  return (
    <Wrapper>
      <p>{commData?.name && commData.name}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`