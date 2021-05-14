import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Menu = () => {
  const menu = [
    {
      jpn: '見つける',
      url: 'community',
    },
    {
      jpn: '集める',
      url: 'gather',
    },
  ]
  return (
    <Wrapper>
      <ul>
        {
          // eslint-disable-next-line arrow-body-style
          menu.map((item) => {
            return (
              <li key={item.url}>
                <Link to={`/${item.url}`}>{item.jpn}</Link>
              </li>
            )
          })
        }
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > ul {
    display: flex;
    justify-content: flex-end;
  }
`
