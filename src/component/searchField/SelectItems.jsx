/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react'
import styled from "styled-components"
import { themeList } from '../../data/themeJ'

export const SelectItems = ({
  handleCurrent,
  current,
  selectingItem,
  handleSelectingItem,
  selectItems

}) => {

  const a = "a"
  return (
    <Wrapper>
      <ul>
        {
          selectItems &&
          themeList.map((selectItem) => 
            <li key={Object.keys(selectItem)[0]}>
              {
                !(selectItems.length === 1) &&
                <p>{Object.keys(selectItem)[0]}</p>
              }
              <ul>
                {
                  Object.values(selectItem)[0].map((item) =>
                    <li key={item}>
                      <form>

                        <label>
                          <input
                            type="radio"
                            name="select"
                            value={item}
                            onChange={() => {
                              handleSelectingItem(item)
                              // handleSelectingItem(item)
                              console.log(item)
                            }}
                            // checked={false}
                            checked={item === selectingItem && true}
                          />
                          <span>{item}</span>
                        </label>
                      </form>
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
        text-align: start;
      }
      & > ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px;
        & > li {
          & > form > label {
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