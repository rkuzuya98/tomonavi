/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import styled from 'styled-components'
import { TextField } from '../form/TextField'
import { TextareaField } from '../form/TextareaField'
import { FormType } from './FormType'
import { H2 } from '../tile/H2'
import { Button } from '../UIKit/Button'
import { ContactPolicy } from './ContactPolicy'

export const ContactForm = () => {

  // フォームの種類
  const [formType, setFormType] = useState<"guest" | "user">("guest")

  // フォームの入力状態
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [option, setOption] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const [policy, setPolicy] = useState<boolean>(false)
  const hdPolicy = () => setPolicy(!policy)
  // フォームの入力処理
  const handleValue = (setState: React.Dispatch<React.SetStateAction<string>>) => (e: Event) => {
    if (!(
      e.target instanceof HTMLInputElement ||
      e.target instanceof HTMLTextAreaElement
      )) {
      return
    }
    setState(e.target.value)
  }

  // フォーム項目
  const formItems = [
    {
      label: "名前",
      onChange: handleValue(setName),
      value: name,
      elType: "textfield",
      formType: ["guest"]
    },
    {
      label: "メールアドレス",
      onChange: handleValue(setEmail),
      value: email,
      elType: "textfield",
      formType: ["guest"]

    },
    {
      label: "質問項目",
      onChange: handleValue(setOption),
      value: option,
      elType: "select",
      formType: ["guest", "user"]
    },
    {
      label: "質問内容",
      onChange: handleValue(setContent),
      value: content,
      elType: "textarea",
      formType: ["guest", "user"]
    },
  ]


  return (
    <Wrapper>
      <H2
        h2="お問い合わせフォーム"
        p="ともナビに関するお問い合わせは以下のフォームからお願いいたします。"
      />
      <FormType
        formType={formType}
        setFormType={setFormType}
      />
      {
        formType === "guest" &&
        <form>
          {
            formItems.map((item) =>
            item.formType.includes("guest") &&
            item.elType === "textfield" ?
            <TextField
              key={item.label}
              label={item.label}
              onChange={item.onChange}
              type="input"
              value={item.value}
            /> :
            item.formType.includes("guest") &&
            item.elType === "textarea" ?
            <TextareaField
              key={item.label}
              label={item.label}
              onChange={item.onChange}
              value={item.value}
            /> :
            item.formType.includes("guest") &&
            item.elType === "select" ?
            <TextField
              key={item.label}
              label={item.label}
              onChange={item.onChange}
              type="input"
              value={item.value}
            /> :
            null
            )
          }
          <ContactPolicy
            policy={policy}
            hdPolicy={hdPolicy}
          />
          <Button
            onClick={() => console.log("Clicked!)")}
            text="送信"
            backgroundColor="steelblue"
            color="white"
            // icon?: "forward" | "back"
            validation={
              name === "" ||
              email === "" ||
              option === "" ||
              content === "" ||
              policy === false
            }
            // borderColor? : string
            // size?: "small"
          />
        </form>
      }
      {
        formType === "user" &&
        <form>
          {
            formItems.map((item) =>
            item.formType.includes("user") &&
            item.elType === "textfield" ?
            <TextField
              key={item.label}
              label={item.label}
              onChange={item.onChange}
              type="input"
              value={item.value}
            /> :
            item.formType.includes("user") &&
            item.elType === "textarea" ?
            <TextareaField
              key={item.label}
              label={item.label}
              onChange={item.onChange}
              value={item.value}
            /> :
            item.formType.includes("user") &&
            item.elType === "select" ?
            <TextField
              key={item.label}
              label={item.label}
              onChange={item.onChange}
              type="input"
              value={item.value}
            /> :
            null
            )
          }
          <Button
            onClick={() => console.log("Clicked!)")}
            text="送信"
            backgroundColor="steelblue"
            color="white"
            // icon?: "forward" | "back"
            validation={
              option === "" ||
              content === ""
            }
            // borderColor? : string
            // size?: "small"
          />
        </form>
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 90%;
  max-width: 500px;
  & > form {
    margin: 0 auto;
    max-width: 300px;
  }
`