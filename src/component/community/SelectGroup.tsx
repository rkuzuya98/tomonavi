import React from 'react'
import styled, { css } from "styled-components"
import { ThemeListProps } from '../../data/theme'
import { BlankSpace } from '../UIKit/BlankSpace'

export type SelectGroupProps = ({
  hdCurrent: (item: string | null) => void
  current: string | null
  selectingItem: string | null
  handleSelectingItem: (item: string) => void
  selectItems: ThemeListProps
  nowGroup: string | null
  hdNowGroup: (item: string | null) => void
})

export const SelectGroup: React.FC<SelectGroupProps> = ({
  hdCurrent,
  current,
  selectingItem,
  handleSelectingItem,
  selectItems,
  nowGroup,
  hdNowGroup

}) =>
  <Wrapper
    nowGroup={nowGroup}
  >
    {
      !nowGroup &&
      <ul>
        {
          selectItems &&
          Object.keys(selectItems).map((selectItemsKey) => 
            <li key={selectItemsKey}>
              {
                !(selectItemsKey.length === 1) &&
                <button
                  onClick={() => hdNowGroup(selectItemsKey)}
                  type="button"
                >
                  <img
                    src={selectItems[selectItemsKey].image}
                    alt="img"
                  />
                  <div>
                    <div>{selectItemsKey}</div>
                    <div>
                      {selectItems[selectItemsKey].explanation}
                    </div>
                  </div>
                </button>
              }
            </li>
          )
        }
      </ul>
    }
    {
      !nowGroup && 
      <BlankSpace height="60px"/>
    }
  </Wrapper>

type WrapperProps = ({
  nowGroup: string | null
})

const Wrapper = styled.div<WrapperProps>`
  transition: transform 0.3s ease;
  transition: opacity 0.3s ease;
  overflow-x: hidden;

  width: 100%;
  overflow-y: scroll;
  height: 100%;
  ${({ nowGroup }) => nowGroup && css`
    opacity: 0;
    pointer-events: none;
    transform: translateX(-50px);
    height: 0;
  `};
  & > ul  {
    & > li {
      box-shadow:rgb(0 0 0 / 3%) 0px 6px 12px, rgb(0 0 0 / 18%) 0px 1px 4px;
      margin-bottom: 15px;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        opacity: 0.5;
      }
      & > button {
        width: 100%;
        border: 1px solid rgba(0,0,0,0.1);
        background-color: white;
        border-radius: 10px;
        display: flex;
        align-items: center;
        padding: 0 10px 0 0;
        position: relative;
        & > img {
          height: 60px;
          width: 60px;
          border-radius: 10px;
          margin: 10px;
          background-color: gray;
        }
        & > div {
          font-weight: bold;
          text-align: start;
          padding: 5px 0;
          & > div:first-child {
            font-size: 16px;
          }
          & > div:last-child {
            font-size: 14px;
            color: rgb(120, 120, 120);
          }
        }
      }
    }
  }
`
