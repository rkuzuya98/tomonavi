import React from 'react'
import styled from 'styled-components'
import { SignButton } from '../UIKit/SignButton '
import {signOptionsData} from '../../data/signOptions'

type SignInOptionsProps = ({
  hdEmail?: VoidFunction
})

export const SignInOptions: React.FC<SignInOptionsProps> = ({
  hdEmail
}) => {
  const a = "a"

  return (
    <Wrapper>
      <p>ログインはこちら</p>
      {
        signOptionsData.map((signOption) =>
          <SignButton
            key={signOption.name}
            src={signOption.src}
            name={signOption.name}
            spanText="でログイン"
            onClick={
              signOption.name === "メールアドレス" ?
              hdEmail :
              () => alert("現在準備中です。")
            }
          />
        )
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-flow: column;
  align-items: center;
  & > p {
    font-weight: bold;
    margin-bottom: 20px;
  }
`