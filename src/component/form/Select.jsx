/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export const Select = ({
  value,
  dataUpdate,
  validation,
  selectItems,
  inputType
}) => {

  // チェックボックスの入力状態
  const [selectingItems,setSelectingItems] = useState(value)
  // チェックボックスの入力操作
  const handleSelectingItems = (selectItem) => {
    const newSelectingItems = [...selectingItems]
    if (newSelectingItems.includes(selectItem)) {
      newSelectingItems.splice(newSelectingItems.indexOf(selectItem), 1)
    } else {
      newSelectingItems.push(selectItem)
    }
    // チェックボックスの入力状態を変更
    setSelectingItems(newSelectingItems)
    // データの入力状態を変更
    dataUpdate(newSelectingItems)
    // データの入力状態をバリデーション
    validation(newSelectingItems)
  }

  // データ項目の移動に対応
  useEffect(()=>{
    // 保持中の値を再格納
    setSelectingItems(value)
  },[value])


  console.log(selectItems)

  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <Wrapper>
      <ul>
        {
          selectItems.map((selectItem) => 
            <li key={Object.keys(selectItem)[0]}>
              {
                !(selectItems.length === 1) &&
                <p>{Object.keys(selectItem)[0]}</p>
              }
              <ul>
                {
                  Object.values(selectItem)[0].map((item) =>
                    <li key={item}>
                      <label>
                        <input
                          type={inputType}
                          name="select"
                          value={item}
                          onChange={() => handleSelectingItems(item)}
                          checked={selectingItems.includes(item)}
                        />
                        <span>{item}</span>
                      </label>
                    </li>
                  )
                }
              </ul>
            </li>
          )
        }
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > ul  {
    & > li {
        &:first-of-type > p {
          margin: 0px 0px 10px 5px;
        }
      & > p {
        font-weight: bold;
        margin: 20px 0px 10px 5px;
      }
      & > ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px;
        & > li {
          & > label {
            border: 2px solid rgba(70,130,180,0.5);
            border-radius: 5px;
            display: flex;
            align-items: center;
            padding: 8px 10px;
            &:hover {
              border: 2px solid steelblue;
            }
            & > input {
              background-color: green;
              border: none;
              &:focus {
                /* outline: none; */
                /* border: none; */
              }
            }
            & > span {
              margin-left: 10px;
              font-weight: bold;
              font-size: 14px;
              /* background-color: yellow; */
            }
          }
        }
      }
    }
  }

`