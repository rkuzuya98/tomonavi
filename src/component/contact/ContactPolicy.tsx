import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type ContactPolicyProps = ({
  policy: boolean
  hdPolicy: VoidFunction
})

export const ContactPolicy: React.FC<ContactPolicyProps> = ({
  policy,
  hdPolicy
}) => {
  const a= ""
  return (
    <Wrapper>
      <label htmlFor="policyCheckbox">
        <input
          type="checkbox"
          checked={policy}
          onClick={hdPolicy}
          id="policyCheckbox"
        />
        &nbsp;&nbsp;<Link to="terms">個人情報保護方針</Link>に同意する
      </label>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 20px;
  & > label {
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > input {
    }
    & > a {
      text-decoration: underline;
      color: steelblue;
    }
  }
`