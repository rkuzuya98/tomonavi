/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const OtherOptions = () => {
  const a = "a"
  return (
    <Wrapper>
      <p>
        ユーザー登録済みの方は
        <Link to="/signin">
          こちら
        </Link>
      </p>
      <p>
        パスワードをお忘れの方は
        {/* <Link to="/signin">
          こちら
        </Link> */}
        <span onClick={() => alert("現在準備中です")}>こちら</span>
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > p {
    font-weight: bold;
    font-size: 14px;
    margin: 5px 0;
    & > a {
      color: steelblue;
    }
    & > span {
      color: steelblue;
      cursor: pointer;
    }
  }
`