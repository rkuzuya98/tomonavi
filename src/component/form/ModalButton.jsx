/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled, { css } from 'styled-components';

export const ModalButton = ({
  text,
  onClick,
  iconButton,
  validation
}) => 
  <Wrapper
    validation={validation}
  >
    <button
      type="button"
      onClick={onClick}
    >
      {
        iconButton === "next" && 
        <CircleIcon className="fas fa-arrow-alt-circle-right"/>
      }
      {
        iconButton === "prev" && 
        <CircleIcon className="fas fa-arrow-alt-circle-left"/>
      }
      {
        text &&
        <p>{text}</p>
      }
    </button>
  </Wrapper>

const Wrapper = styled.div`
  ${({ validation }) => validation || css`
    opacity: 0.3;
    pointer-events: none;
  `}
  border: none;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.5;
  }
  & > button {
    border: none;
    background-color: rgba(0,0,0,0);
    & > p {
      height: 30px;
    }
  }
`

const CircleIcon = styled.i`
  font-size: 30px;
  color: steelblue;
  cursor: pointer;
  border-radius: 50%;
`