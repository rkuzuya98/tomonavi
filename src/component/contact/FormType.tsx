import React from 'react'
import styled from 'styled-components'

type FormTypeProps = ({
  formType: "guest" | "user"
  setFormType: React.Dispatch<React.SetStateAction<"guest" | "user">>
})

export const FormType: React.FC<FormTypeProps> = ({
  formType,
  setFormType
}) => {
  const toGuestForm = () => setFormType("guest")
  const toUserForm = () => setFormType("user")
  return (
    <Wrapper>
      <div>
        <div>
          <button
            type="button"
            id={
              formType === "guest" ?
              "currentFormType" :
              "not-currentFormType"
            }
            onClick={toGuestForm}
          >
            メールアドレス
          </button>
        </div>
        <div/>
        <div>
          <button
            type="button"
            id={
              formType === "user" ?
              "currentFormType" :
              "not-currentFormType"
            }
            onClick={toUserForm}
          >
            登録アカウント
          </button>
        </div>
      </div>
      <p>
        {
          formType === "guest" ?
          "メールアドレスを用いてお問い合わせいただいた場合、返信はご記入いただいたメールアドレス宛にお送りさせていただきます。" :
          // formType === "user"
          "ともナビアカウントを用いてお問い合わせいただいた場合、返信はマイページ内のメッセージボックスにお送りさせていただきます。"
        }
      </p>
      {/* <h3>STEP２：入力エリア</h3> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > div {
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    gap: 15px;
    align-items: center;
    & > div {
      &:nth-child(1) {
        text-align: end;
      }
      &:nth-child(2) {
        height: 40%;
        border: 0.5px solid rgba(0,0,0,0.3);
        transform: translateY(-2px);
      }
      &:nth-child(3) {
        text-align: start;
      }
      & > button {
        font-size: 14px;
        padding: 0 5px 2px 5px;
        border: none;
        background-color: rgba(0,0,0,0);
        box-sizing: border-box;
        &#currentFormType {
          border-bottom: 2px solid steelblue;
        }
        &#not-currentFormType {
          border-bottom: 2px solid rgba(0,0,0,0);
        }
      }
    }
  }
  & > p {
    display: inline-block;
    text-align: start;
    color: dimgray;
    max-width: 300px;
    margin-top: 20px;
    font-size: 12px;
  }
`