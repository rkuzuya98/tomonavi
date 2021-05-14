import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { BlankSpace } from '../UIKit/BlankSpace'
import { Button } from '../UIKit/Button'
import { UnderlineButton } from '../UIKit/UnderlineButton'
import { processItems } from './processData'

export const Process = () => {
  const a = ""
  const history = useHistory()
  const toQuestion = () => history.push("/question")
  return (
    <Wrapper>
      <p>ユーザー登録の手順</p>
      <div>
        {
          processItems.map((item, index) => {
            const d: (string | {url: string, text: string})[] = item.explanation.split("コミュニティを広める")
            if (item.explanation.includes("コミュニティを広める")) {
              d.splice(1,0, { url: "gather", text: "コミュニティを広める" })
            }
            console.log(d)

            return (
              <div key={item.alt}>
                <img
                  src={item.src}
                  alt={item.alt}
                />
                <span>{`STEP ${index + 1}`}</span>
                <p>
                  {
                    d.map((it) => {
                      switch(typeof it) {
                        case "string":
                          return it
                        case "object":
                          return <Link to={it.url}>{it.text}</Link>
                        default:
                          return "a"
                      }
                    })
                  }
                </p>
              </div>
            )
          })
        }
      </div>
      <BlankSpace height="40px"/>
      <UnderlineButton
        text="よくある質問"
        icon="forward"
        onClick={toQuestion}
      />
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
        & > a {
          color: steelblue;
          text-decoration: underline;
          font-weight: bold;
        }
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