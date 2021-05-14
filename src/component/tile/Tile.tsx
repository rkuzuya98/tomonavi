import React from 'react'
import styled, { css } from 'styled-components'
import DotsLoader from '../loading/DotsLoader'

type TileProps = ({
  maxWidth?: string
  loading?: boolean
  type? : "topArea" | undefined
})

export const Tile: React.FC<TileProps> = ({
  children,
  maxWidth,
  loading,
  type
}) =>
  <>
  <Wrapper type={type}>
    <DotsLoader 
      loading={loading}
    />
    <div>
      {children}
    </div>
  </Wrapper>
  </>

const Wrapper = styled.div<{
  type: "topArea" | undefined
}>`
  margin: 10px 5px;
  max-width: 1000px;
  background-color: white;
  border-radius: 10px;


  & > div:last-child {
    padding: 60px 0 60px 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;
    background-color: white;
    border-radius: 20px;
    transition: all 0.5s ease;
  }

  @media screen and (min-width: 600px) {
    margin: 20px 20px;
    & > div:last-child {
      /* padding: 60px 40px 60px 40px; */
    }
  }
  /* @media screen and (min-width: 768px) {
    margin: 20px 20px;
  } */
  @media screen and (min-width: 1010px) {
    margin: 20px auto;
  }

  ${({ type }) => type === "topArea" && css`
    & > div:last-child {
      padding-bottom: 30px;
    }
  `}
`