import React, { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { Feature } from './Feature'

export const Features = () => {

  const history = useHistory()
  const toSearchCondition = () => history.push('/about/search-condition')

  const featuresList = [
    {
      title: ["自分の条件にマッチした","コミュニティを見つけられる"],
      text: "「分野・テーマ」と「開催場所」によるコミュニティの絞り検索に加え、並び替え表示を行うこともできます。",
      icon: "fas fa-search",
      buttonText: "検索条件",
      buttonUrl: toSearchCondition,
    },
    {
      title: ["参加したいコミュニティの","雰囲気を事前に確認できる"],
      text: "コミュニティへ参加のハードルが少しでも下がるよう、コミュニティページの情報を充実させています。",
      icon: "fas fa-users",
      buttonText: "掲載情報",      
      buttonUrl: toSearchCondition,
    },
    {
      title: ["便利な機能"],
      text: "ともナビへのユーザー登録を行うことで「お気に入り機能」や「メッセージ機能」などを利用できます。",
      icon: "fas fa-tools",
      buttonText: "機能一覧",
      buttonUrl: toSearchCondition,
    },

  ]
  return (
    <Wrapper>
      <ul>
        {
          featuresList.map((item) => {
            const a = ""
            return (
              <li key={item.title[0]}>
                <Feature
                  item={item}
                />
              </li>
            )
          })
        }
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 90%;
  & > ul {
    display: grid;
    gap: 60px;
  }

  @media screen and (min-width: 768px) {
    & > ul {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
    }
  }
`