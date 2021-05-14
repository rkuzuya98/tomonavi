import React from 'react'
import styled from "styled-components"

type NarrowTopProps = ({
  handleWindow: VoidFunction
  nowGroup: string | null
  hdNowGroup: (g: string | null) => void
})

export const NarrowTop: React.FC<NarrowTopProps> = ({
  handleWindow,
  nowGroup,
  hdNowGroup
}) =>
  <Wrapper>
    {
      nowGroup ?
      <button
        type="button"
        onClick={() => hdNowGroup(null)}
      >
        <i className="fas fa-chevron-left"/>
      </button> :
      <div style={{ width: "30px" }} />

    }
    <p>
      分野・テーマを選択
    </p>
    <button
      type="button"
      onClick={() => {
        hdNowGroup(null)
        handleWindow()
      }}
    >
      <i className="fas fa-times"/>
    </button>
  </Wrapper>


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > p {
    font-size: 18px;
    font-weight: bold;
  }
  & > button {
    border: none;
    background-color: rgba(0,0,0,0);
    width: 30px;
    height: 30px;
    font-size: 20px;
    border-radius: 30%;
    transition: all 0.3s ease;
    &:hover {
      background-color: aliceblue;
    }
  }
`

