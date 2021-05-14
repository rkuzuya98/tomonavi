import React from 'react'
import styled from 'styled-components'
import { SignButton } from '../UIKit/SignButton '
import {signOptionsData} from '../../data/signOptions'



export const OtherSignInOptions = () => {
  const a = "a"

  return (
    <Wrapper>
      <p>他の登録方法</p>
      {
        signOptionsData.map((signOption) =>
          signOption.name === "メールアドレス" ||
          <SignButton
            key={signOption.name}
            src={signOption.src}
            name={signOption.name}
            spanText="で登録"
            onClick={() => alert("現在準備中です。")}
          />
        )
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-flow: column;
  align-items: center;
  & > p {
    font-weight: bold;
    margin: 20px auto;
  }
`