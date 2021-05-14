import React from 'react'
import styled, { css } from "styled-components"
import { ThemeListProps } from '../../data/theme'
import { BlankSpace } from '../UIKit/BlankSpace'

type SelectOneProps = ({
  nowGroup: string | null
  hdNowGroup: (item: string | null) => void
  selectItems: ThemeListProps
  hdCurrent: (item: string | null) => void
  handleWindow: VoidFunction
})

export const SelectOne: React.FC<SelectOneProps> = ({
  nowGroup,
  hdNowGroup,
  selectItems,
  hdCurrent,
  handleWindow
}) =>
  <Wrapper nowGroup={nowGroup} >
    {
      nowGroup &&
      <ul>
          {
            selectItems &&
            selectItems[nowGroup].list.map((item) =>
              <li
                key={item.alphabet}
                >
                <button
                  type="button"
                  onClick={
                    () => {
                      hdCurrent(item.shortName)
                      handleWindow()
                      hdNowGroup(null)
                    }
                  }
                >
                  <div>{item.longName}</div>
                  <div>
                    {
                      item.keywords.map((keyword) =>
                        <span key={keyword}>
                          {keyword}
                        </span>
                      )
                    }
                  </div>
                </button>
              </li>
            )
          }
      </ul>
    }
    {
      nowGroup && 
      <BlankSpace height="60px"/>
    }
  </Wrapper>

type WrapperProps = ({
  nowGroup: string | null
})

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  transition: transform 0.3s ease;
  transition: opacity 0.3s ease;
  overflow-y: scroll;
  height: 100%;
  ${({ nowGroup }) => !nowGroup && css`
    opacity: 0;
    pointer-events: none;
    transform: translate(50px);
    height: 0;
  `};
  & > ul {
    & > li {
      & > button {
        background-color: white;
        width: 100%;
        box-shadow:rgb(0 0 0 / 3%) 0px 6px 12px, rgb(0 0 0 / 18%) 0px 1px 4px;
        border-radius: 10px;
        margin-bottom: 15px;
        padding: 10px 0;
        border: 1px solid rgba(0,0,0,0.1);
        cursor: pointer;
        transition: all 0.3s ease;
        & > div:first-child {
          font-size: 16px;
        }
        & > div:last-child {
          margin-top: 5px;
          & > span {
            font-size: 14px;
            color: rgb(120, 120, 120);
            margin-right: 5px;
            &::after {
              content: ","
            }
            &:last-child {
              margin-right: 0px;
              &::after {
                content: ""
              }
            }
          }
        }
        &:hover {
          opacity: 0.5;
        }
        &#selectingItem {
          background-color: steelblue;
          & > div:first-child {
            color: white;
            font-size: 16px;
          }
          & > div:last-child {
            margin-top: 5px;
            & > span {
              color: white;
            }
          }
        }
      }
    }
  }
`
