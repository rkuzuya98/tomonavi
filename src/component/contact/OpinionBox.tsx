import React from 'react'
import styled from 'styled-components'
import { H2 } from '../tile/H2'
import { CommingSoon } from '../UIKit/CommingSoon'

export const OpinionBox = () => {
  const a ="b"
  return (
    <Wrapper>
      <H2
        h2="ご意見ボックス"
        p="ともナビに関するご要望やサービス改善案を受け付けています。"
      />
      <CommingSoon/>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`