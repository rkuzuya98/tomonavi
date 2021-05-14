import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Policy = () => {
  const a = "a"
  return (
    <Wrapper>
      <p>
        以下の「<span>同意して登録</span>」を選択することで、ともナビの
        <Link to="terms" target="_blank">サービス利用規約</Link>
        、および
        <Link to="privacy" target="_blank">個人情報保護ポリシー</Link>
        に同意します。
        {/* 以下の「同意して登録」を選択することで、ともナビのサービス利用規約、支払サービス利用規約および個人情報保護ポリシーに同意します。 */}
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 10px 0;
  & > p {
    font-size: 12px;
    margin: 5px 0;
    text-align: justify;
    color: dimgray;
    & > span {
      font-weight: bold;
    }
    & > a {
      color: steelblue;
      font-weight: bold;
      text-decoration: underline;
      transition: all 0.3s ease;
      &:hover {
        opacity: 0.5;
      }
    }
  }
`