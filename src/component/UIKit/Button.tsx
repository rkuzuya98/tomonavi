import React from 'react'
import styled, { css } from 'styled-components'

type ButtonProps = ({
  onClick: React.MouseEventHandler<HTMLButtonElement> & ((event: React.MouseEvent<HTMLInputElement>) => void)
  text: string
  backgroundColor?: string
  icon?: "forward" | "back"
  color?: string
  validation?: boolean
  borderColor? : string
  size?: "small"
})

export const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  backgroundColor,
  icon,
  color,
  validation,
  borderColor,
  size
}) => {

  const iconList: { [key: string]: string } = {
    forward: "fas fa-chevron-right",
    back: "fas fa-chevron-left"
  }

  const iconClassName = (item?: string): string | undefined => item && iconList[item]

  return (
  <ButtonTag
    onClick={onClick}
    type="button"
    backgroundColor={backgroundColor}
    icon={icon}
    color={color}
    validation={validation}
    borderColor={borderColor}
    size={size}
  >
    <div>
      {
        icon === "back" &&
        <i className={iconClassName(icon)}/>
      }
    </div>
    <span>{text}</span>
    <div>
      {
        icon &&
        icon !== "back" &&
        <i className={iconClassName(icon)}/>
      }
    </div>
  </ButtonTag>
  )
}


type ButtonTagProps = ({
  onClick: React.MouseEventHandler<HTMLButtonElement> & ((event: React.MouseEvent<HTMLInputElement>) => void)
  backgroundColor?: string
  icon?: string
  color?: string
  validation?: boolean
  borderColor?: string
  size?: "small"
})

const ButtonTag = styled.button<ButtonTagProps>`
  min-height: 50px;
  font-weight: bold;
  width: 100%;
  max-width: 300px;
  border: none;
  border-radius: 10px;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    & > i {
      width: 15px;
      font-size: 12px;
    }
    &:first-of-type {
      margin: 0 5px 0 10px;
    }
    &:last-of-type {
      margin: 0 10px 0 5px;
    }
  }

  & > div {
    color: rgba(0,0,0,0.7);
  }

  ${({ backgroundColor }) => backgroundColor && css`
    background-color: ${ backgroundColor };
  `};

  ${({ color }) => color && css`
    & > span {
      color: ${ color };
    }
    & > div { 
      & > i {
        color: ${ color };
      }
    }
  `};

  ${({ borderColor }) => borderColor && css`
    border: 2px solid ${borderColor};
  `};

  ${({ validation }) => validation && css`
    opacity: 0.3;
    pointer-events: none;
  `};

  transition: all 0.3s ease;
  &:focus {
    outline: none;
    border: none;
    opacity: 0.7;
  }
  &:hover {
    opacity: 0.7;
  }

  ${({ size }) => size === "small" && css`
    font-size: 13px;
    min-height: 34px;
    width: auto;
  `};

  ${({ size, borderColor }) => borderColor && size === "small" && css`
    border: 1.5px solid ${borderColor};
  `};
`
