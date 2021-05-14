/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import styled from 'styled-components'

export const ResultOrder = ({
  order,
  handleOrder
}) =>
  <Wrapper>
    <div>
      <button
        type="button"
        onClick={() => handleOrder("updated_at")}
        id={order === "updated_at" && "currentOrder"}
      >
        <p>最終更新</p>
        <i className="fas fa-history"/>
      </button>
      <button
        type="button"
        onClick={() => handleOrder("favorite_number")}
        id={order === "favorite_number" && "currentOrder"}
      >
        <p>お気に入り数</p>
        <i className="fas fa-heart"/>
      </button>
      <button
        type="button"
        onClick={() => handleOrder("enrichment")}
        id={order === "enrichment" && "currentOrder"}
      >
        <p>ページ充実度</p>
        <i className="fas fa-award"/>
      </button>
    </div>
  </Wrapper>

const Wrapper = styled.div`
  width: 90%;

  & > h1 {
    font-size: 20px;
    background-color: white;
    padding: 0 20px;
  }
  & > div {
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    & > button {
      background-color: white;
      border: 2px solid steelblue;
      padding: 10px 0;
      & > p, & > i {
        color: steelblue;
      }
      & > p {
        font-weight: bold;
        margin-bottom: 5px;
      }
      & > i {
        font-size: 18px;
      }
      &#currentOrder {
        background-color: steelblue;
        & > p, & > i {
          color: white;
        }
      }
      &:nth-of-type(1) {
        border-radius: 10px 0 0 10px;
      }
      &:nth-of-type(2) {
        border-left: none;
        border-right: none;
      }
      &:nth-of-type(3) {
        border-radius: 0 10px 10px 0px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    width: 80%;
  }

`