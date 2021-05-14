import React from 'react'
import styled from 'styled-components'

type ResultOrderProps = ({
  order: string
  handleOrder: (newOrder: string) => void
})

export const ResultOrder: React.FC<ResultOrderProps> = ({
  order,
  handleOrder
}) => {

  // 並び替えの種類
  const orderItems = [
    {
      key: "updated_at",
      name: "最終更新",
      icon: "fas fa-history"
    },
    {
      key: "favorite_number",
      name: "お気に入り数",
      icon: "fas fa-heart"
    },
    {
      key: "enrichment",
      name: "ページ充実度",
      icon: "fas fa-award"
    },
  ]

  return (
    <Wrapper>
      {
        orderItems.map((item) =>
          <button
            key={item.key}
            type="button"
            onClick={() => handleOrder(item.key)}
            id={
              order === item.key ? 
              "currentOrder" :
              undefined
            }
          >
            <p>{item.name}</p>
            <i className={item.icon}/>
          </button>
        )
      }
    </Wrapper>

  )
}

const Wrapper = styled.div`
  width: 90%;
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
      font-size: 14px;
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
  @media screen and (min-width: 768px) {
    width: 80%;
  }

`