/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled, { css } from 'styled-components';

export const ModalPath = ({
  setNowIndex,
  datas,
  nowIndex,
  maxIndex,
  doneIndex
}) =>
  <Wrapper
    sectionMaxIndex={maxIndex}
    sectionIndex={nowIndex}
  >
    <ul>
      {
        Object.keys(datas).map((key,index) => 
          <li key={key}>
            {
              index <= maxIndex ?
                doneIndex.includes(index) ?
                <i className="fas fa-check"/> :
                <i className="fas fa-times"/> :
              <i/>
            }
            <div>
              <div/>
              <button
                type="button"
                onClick={()=>setNowIndex(index)}
              />
            </div>
          </li>
        )
      }
    </ul>
  </Wrapper>

const Wrapper = styled.div`
  margin: 30px 0 20px 0;
  & > ul {
    display: grid;
    grid-template-columns: 14px repeat(auto-fit,minmax(20px, 1fr));
    & > li {
      & > i {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        height: 0px;
        text-align: end;
        font-size: 12px;
        margin-bottom: 3px;
        &.fa-check {
          color: steelblue;
          transform: translateX(-1.0px);
        }
        &.fa-times {
          color: steelblue;
          transform: translateX(-2.5px);
        }
      }
      & > div {
        display: grid;
        grid-template-columns: 1fr 14px;
        align-items: center;
        & > div {
          height: 5px;
          width: 100%;
        }
        &:first-child > div {
          display: none;
        }
        & > button {
          height: 14px;
          width: 14px;
          border-radius: 50%;
          border: none;
          background-color: rgba(70,130,180,0.2);
          &:focus {
            outline: none;
            border: none;
          }
        }
    
      }
      ${({ sectionMaxIndex }) => css`
        &:nth-child(-n + ${sectionMaxIndex + 1}) {
          & > div > div, & > div > button {
            background-color: steelblue;
            cursor: pointer;
          }
        }
        &:nth-child(n + ${ sectionMaxIndex + 2 }) {
          & > div > div, & > div > button {
            background-color: rgba(70,130,180,0.2);
            pointer-events: none;
          }
        }
      `}
      ${({ sectionIndex }) => css`
        &:nth-child(${ sectionIndex + 1 }) {
          & > div > button {
            display: flex;
            align-items: center;
            justify-content: center;
            &::after {
              content: '';
              height: 6px;
              width: 6px;
              border-radius: 50%;
              background-color: white;
            }
          }
        }
      `}
    }
  }
`