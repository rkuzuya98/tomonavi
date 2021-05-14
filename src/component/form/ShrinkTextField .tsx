import React, { FC } from 'react'
import styled from 'styled-components'

export const ShrinkTextField: FC<{
  label: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any
  type: string
  value: string
}> = ({ label, onChange, type, value }) => 
  <Wrapper>
    <input onChange={onChange} placeholder="&nbsp;" type={type} value={value} />
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label>{label}</label>
  </Wrapper>

const Wrapper = styled.div`
  height: 40px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  /* max-width: 280px; */
  margin: 20px auto;
  & label {
    color: lightslategray;
    position: absolute;
    top: 0%;
    left: 1%;
    pointer-events: none;
    /* font-weight: bold; */
    transition: all 0.3s ease;
  }
  &:focus-within label {
    font-size: 10px;
    font-weight: bold;
    top: -50%;
    color: steelblue;
  }
  & > input {
    font-size: 20px;
    width: 100%;
    /* max-width: 280px; */
    border: none;
    border-bottom: 1px solid lightslategray;
    transition: all 0.1s ease;
    &:hover {
      border-bottom: 2px solid steelblue;
    }
    &:focus {
      border: none;
      border-bottom: 2px solid steelblue;
      outline: none;
    }
    &:not(:placeholder-shown) + label {
      font-size: 10px;
      top: -50%;
      color: steelblue;
    }
  }
`
