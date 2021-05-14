/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable arrow-body-style */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Breadcrumbs = ({
  firstPathName,
  firstPathLink,
  secondPathName,
  secondPathLink,
}) => {
  return (
    <Wrapper>
      <Link to="/">
        <i className="fas fa-home"/>
      </Link>
      <span>/</span>
      <Link to={firstPathLink}>
        {firstPathName}
      </Link>
      {
        secondPathName &&
        <>
          <span>/</span>
          <Link to={secondPathLink}>
            {secondPathName}
          </Link>
        </>
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 94vw;
  max-width: 1000px;
  margin: 10px auto;
  background-color: white;
  border-radius: 20px;
  padding: 10px 0 10px 0;
  transform: translateY(5px);
  font-weight: bold;
  & > span {
    margin: 0 5px;
    color: steelblue;
    font-size: 14px;
  }
  & > a > i {
    color: steelblue;
    margin-left: 20px;
    font-size: 14px;
  }
  & > a {
    color: steelblue;
    font-size: 14px;
  }
`