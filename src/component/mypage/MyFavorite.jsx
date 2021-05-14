/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/self-closing-comp */
import React from 'react'
import styled from 'styled-components'
import { CommingSoon } from '../UIKit/CommingSoon'

export const MyFavorite = ({
  userData
}) => {
  const a = "a"
  return (
    <Wrapper>
      <h1>お気に入りコミュニティ</h1>

      <CommingSoon/>
      {/* <ul>
        {
          userData?.favorites &&
          userData.favorites.map((favorite) => {
            const b = "A"
            return (
              <li key={favorite}>
                {favorite}
              </li>
            )
          })
        }
      </ul> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > h1 {
    font-size: 20px;
  }
`