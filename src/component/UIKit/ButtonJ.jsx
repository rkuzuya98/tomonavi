/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC } from 'react'
import styled, { css } from 'styled-components'

export const Button = ({
  onClick,
  text,
  backgroundColor,
  icon,
  color,
  validation
}) => {

  const iconClassName = (item) => 
    item === "forward" ?
    "fas fa-chevron-right" :
    item === "back" ?
    "fas fa-chevron-left" :
    null

  return (
  <ButtonTag
    onClick={onClick}
    type="button"
    backgroundColor={backgroundColor}
    icon={icon}
    color={color}
    validation={validation}
  >
    {
      icon && <i className={iconClassName(icon)}/>
    }
    {/* <i className="fas fa-arrow-left"/> */}
    {/* <i className="fas fa-chevron-left"/> */}
    {text}
  </ButtonTag>
  )
}

const ButtonTag = styled.button`
  padding: 10px;
  /* font-size: 14px; */
  font-weight: bold;
  width: 100%;
  max-width: 400px;
  min-width: 300px;
  border: none;
  border-radius: 10px;
  background-color: gainsboro;
  color: rgba(0,0,0,0.7);
  ${({backgroundColor})=>backgroundColor&&css`
    background-color: ${backgroundColor}
  `};
  ${({color})=>color&&css`
  color: ${color}
  `};
  position: relative;
  z-index: 0;
  i {
    position: absolute;
    top: 50%;
    ${({icon}) => icon === "back" && css`
      left: 20px;
      transform: translate(0%, -50%);
    `};
    ${({icon}) => icon === "forward" && css`
      right: 20px;
      transform: translate(0%, -50%);
    `};
  }
  ${({validation}) => validation || css`
    opacity: 0.3;
    pointer-events: none;
  `};
  &:focus {
    outline: none;
    /* outline: none!important; */
    border: none;
    opacity: 0.7;
  }
  &:hover {
    opacity: 0.7;
  }
  transition: all 0.3s ease;
`
