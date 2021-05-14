/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useRef } from 'react'
import styled from 'styled-components'

export const TextField: FC<{
  label: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any
  type: string
  value: string
  supp?: string
}> = ({ label, onChange, type, value, supp }) =>{
  const inputEl = useRef<HTMLInputElement | null>(null)
  const hdClick = () => inputEl.current?.focus()

  return (
    <Wrapper>
      <div onClick={hdClick}>
        <input
          ref={inputEl}
          id={label}
          onChange={onChange}
          placeholder="&nbsp;"
          type={type}
          value={value}
          />
        <label htmlFor={label}>{label}</label>
      </div>
      <p>{supp}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 20px 0;
  & > div {
    position: relative;
    border: 1px solid rgba(0,0,0,0.3);
    box-sizing: border-box;
    border-radius: 10px;
    height: 55px;
    width: 100%;
    max-width: 600px;
    padding: 25px 10px 15px 20px;
    cursor: pointer;
    transition: all 0.1s ease;
    & > label {
      color: dimgray;
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
      cursor: pointer;
      transition: all 0.2s ease;
    }
    & > input {
      width: 100%;
      border: none;
      cursor: pointer;
      &:focus {
        outline: none;
        border: none;
      }
      &:not(:placeholder-shown) + label {
        top: 5px;
        transform: translateY(0%);
        font-size: 12px;
      }
    }
    &:focus-within {
      border: 2px solid steelblue;
      & > label {
        top: 5px;
        transform: translateY(0%);
        font-size: 12px;
      }
    }
  }
  & > p {
    margin-top: 5px;
    font-size: 12px;
    color: dimgray;
    text-align: start;
    width: 100%;
  }
`