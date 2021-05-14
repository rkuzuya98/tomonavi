import React from 'react'
import styled from 'styled-components'

type UnderlineButtonProps = ({
  text: string
  icon?: "forward" | "back"
  onClick: React.MouseEventHandler<HTMLButtonElement> & ((event: React.MouseEvent<HTMLInputElement>) => void)
})

export const UnderlineButton: React.FC<UnderlineButtonProps> = ({
  text,
  icon,
  onClick
}) => {
  const iconList = {
    forward: "fas fa-chevron-right",
    back: "fas fa-chevron-left"
  }
  return (
    <ButtonTag
      onClick={onClick}
    >
      {
        icon &&
        <div/>
      }
      <p>{text}</p>
      {
        icon &&
        <i className={iconList[icon]}/>
      }
    </ButtonTag>
  )
}

const ButtonTag = styled.button`
  border: none;
  border-bottom: 1px solid black;
  padding-bottom: 5px;
  background-color: rgba(0,0,0,0);
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  & > div {
    width: 10px;
  }
  & > i {
    font-size: 10px;
    padding: 0 10px;
  }
  & > p {
    font-size: 14px;
  }
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.5;
  }

`