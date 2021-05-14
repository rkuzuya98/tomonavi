import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export const Text = ({
  value,
  dataUpdate,
  span,
  validation
}) => {

  // inputタグにフォーカスを当てる
  const inputEl = useRef(null);
  const handleFocus = () => inputEl.current.focus();

  // inputタグの入力状態
  const [text, setText] = useState(value);

  // inputタグへの入力操作
  const handleText = (e) => {
    // inputタグの入力状態を変更
    setText(e.target.value)
    // データの入力状態を変更
    dataUpdate(e.target.value)
    // データの入力状態をバリデーション
    validation(e.target.value)
  }

  useEffect(()=>{
    setText(value)
  },[value])

  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <Wrapper
      onClick={handleFocus}
    >
      {
        span === 'urlPath' &&
        <span>{"~tomonavi.com" + '/'}</span>
      }
      {/* <span>{span}</span> */}
      <input
        ref={inputEl}
        onChange={handleText}
        value={text}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 2px solid rgba(70,130,180,0.5);
  border-radius: 5px;
  display: flex;
  padding: 5px;
  &:focus-within {
    border: 2px solid steelblue;
  }
  & > span {
    color: gray;
    margin-right: 5px;
  }
  & > input {
    width: 100%;
    border: none;
    font-weight: bold;
    &:focus {
      outline: none;
      border: none;
    }
  }
`