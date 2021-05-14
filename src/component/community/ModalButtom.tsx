import React, { useState } from 'react'
import styled from "styled-components"
import { Button } from '../UIKit/Button'
import { ThemeListProps } from '../../data/theme'
import { SelectGroup } from './SelectGroup'
import { SelectOne } from './SelectOne'

type ModalButtomProps = ({
  selecting: string | null
  hdSelecting: (item: string | null) => void
})

export const ModalButtom: React.FC<ModalButtomProps> = ({
  selecting,
  hdSelecting
}) => {

  const a = "a"
  
  return (
    <Wrapper>
      <Button
        text="全て"
        onClick={() => hdSelecting(null)}
        color={selecting ? "steelblue" : "white"}
        backgroundColor={selecting ? "white" : "steelblue"}
        validation={false}
        borderColor="steelblue"
      />
      <Button
        text={`決定【${selecting || "全て"}】`}
        backgroundColor="steelblue"
        // onClick={() => {
        //   handleCurrent(selectingItem)
        //   handleWindow()
        // }}
        onClick={() => console.log("A")}
        color="white"
        validation={false}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* background-color: red; */
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 10px;
  & > button {
    width: 100%;
  }

`

