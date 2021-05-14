/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { processItems } from './processData'

export const Proces = () => {
  const a = ""
  return (
    <Wrapper>
      <p>ユーザー登録の手順</p>
      <div>
        {
          processItems.map((item, index) => {
            const b = ""
            const c = "abc"
            const replacedExplanation = item.explanation.replace("コミュニティを広める", <Link to="/">コミュニティを広める</Link>)
            
            return (
              <div key={item.alt}>
                <img
                  src={item.src}
                  alt={item.alt}
                />
                <span>{`STEP ${index + 1}`}</span>
                {/* <p>{item.explanation}</p> */}
                <p>{replacedExplanation}</p>
              </div>
            )
          })
        }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > p {
    font-weight: bold;
    margin-bottom: 30px;
  }
  & > div {
    width: 95%;
    max-width: 700px;
    margin: 0 auto;
    display: grid;
    gap: 20px;

    & > div {
      width: 100%;
      border: 1px solid steelblue;
      box-sizing: border-box;
      padding: 30px 20px 15px 20px;
      border-radius: 10px;
      position: relative;
      & > img {
        width: 70%;
      }
      & > span {
        position: absolute;
        top: 0;
        left: 0;
        background-color: steelblue;
        color: white;
        padding: 5px 10px;
        border-radius: 9px 0 9px 0;
        border-top: 1px solid steelblue;
        border-left: 1px solid steelblue;
        font-size: 12px;
        font-weight: bold;
      }
      & > p {
        margin-top: 10px;
        text-align: justify;
        font-size: 12px;
      }
    }
  }

  @media screen and (min-width: 500px) {
    & > div {
      gap: 15px;
      grid-template-columns: 1fr 1fr;
    }
  }
`