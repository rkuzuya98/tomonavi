import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getBreadcrumbsData } from './breadcrumbsData'

type BreadcrumbsProps = ({
  location: {
    pathname: string
  }
})

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  location
}) => {
  
  // パンくず要素
  const pathName = location.pathname
  const crumbs = pathName.split("/")
  crumbs.shift()

  return (
    <Wrapper>
      {/* ホームボタン */}
      <Link to="/">
        <i className="fas fa-home"/>
      </Link>
      {
        crumbs.map((crumb) => {
          const jpnCrumb = getBreadcrumbsData(crumb)
          return (
            <>
              <i className="fas fa-chevron-right"/>
              <span key={crumb}>{jpnCrumb}</span>
            </>
          )
        })
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px 0 10px 0;
  transform: translateY(5px);
  font-weight: bold;
  display: flex;
  align-items: center;
  margin: 5px 5px;
  max-width: 1000px;
  & > span {
    margin: 0 5px;
    color: steelblue;
    font-size: 14px;
  }
  & > a > i {
    color: steelblue;
    margin: 0 5px 0 20px;
    font-size: 14px;
  }
  & > a {
    color: steelblue;
    font-size: 14px;
  }
  & > i {
    font-size: 10px;
    margin: 0 5px;
    color: rgba(70,130,180,0.5);
  }

  @media screen and (min-width: 600px) {
    margin: 20px 20px;
  }
  /* @media screen and (min-width: 768px) {
    margin: 20px 20px;
  } */
  @media screen and (min-width: 1010px) {
    margin: 20px auto;
  }
`