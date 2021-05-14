/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import styled from 'styled-components'
import { Button } from '../../UIKit/Button'

export const Feature: React.FC<{
  item: any
}> = ({
  item
}) => {
  const featuresList = ""
  return (
    <Wrapper>
      <i className={item.icon} />
      <div>
        {item.title.map((t: string)=><p key={t}>{t}</p>)}
      </div>
      <p>{item.text}</p>
      <Button
        onClick={item.buttonUrl}
        text={item.buttonText}
        backgroundColor="white"
        color="steelblue"
        icon="forward"
        // validation?: boolean
        borderColor="steelblue"
        size="small"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  & > i {
    font-size: 40px;
    color: steelblue;
  }
  & > div:nth-of-type(1) {
    margin: 10px 0 5px 0;
    min-height: 50px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    & > p {
      font-size: 14px;
      font-weight: bold;
    }
  }

  & > p {
    min-height: 60px;
    font-size: 12px;
    text-align: start;
    margin-bottom: 10px;
  }
`