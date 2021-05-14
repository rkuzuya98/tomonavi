import React from 'react'
import styled from 'styled-components'

type SignButtonProps = ({
  src: string
  name: string
  spanText?: string
  onClick?: VoidFunction
})

export const SignButton: React.FC<SignButtonProps> = ({
  src,
  name,
  spanText,
  onClick
}) => {
  const a = "a"
  return (
    <ButtonTag
      type="button"
      onClick={onClick}
    >
      <img
        src={src}
        alt="logoIcon"
      />
      <span>{name}{spanText}</span>
      <div/>
    </ButtonTag>
  )
}

const ButtonTag = styled.button`
  height: 50px;
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  border: 2px solid rgba(70,130,180,0.5);
  margin-bottom: 10px;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.5;
  }
  & > img {
    width: 25px;
    height: 25px;
    margin-left: 10px;
  }
  & > span {
    font-size: 14px;
    /* background-color: yellow; */
  }
  & > div {
    width: 25px;
    margin-right: 10px;
  }
`