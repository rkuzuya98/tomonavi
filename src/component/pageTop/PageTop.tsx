/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { Slider } from '../slider/Slider';

type PageTopProps = ({
  title: string
  subtitle: string
  image: {
    alt: string
    src: string
  }
  explanation?: string[]
  button? : {
    url: string
    text: string
  }
  contents:  JSX.Element[]
  contentsHeight: string
})

export const PageTop:React.FC<PageTopProps> = ({
  title,
  subtitle,
  image,
  explanation,
  button,
  contents,
  contentsHeight
}) => {
  const history = useHistory()
  const toPage = () => button && history.push(button.url)
  console.log(contents[0])
  return (
  <Wrapper>
      {/* イメージ画像 */}
      <img
        alt={image.alt}
        src={image.src}
      />
      {/* タイトル＆説明＆ボタン */}
      <div>
        {/* タイトル */}
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        {/* 説明 */}
        <div>
          {/* {
            explanation.map((item) => 
              <p key={item}>{item}</p>
            )
          } */}
          <Slider contentsHeight={contentsHeight}>
            {
              contents.map((content) => {
                const b = ""
                return (
                  content
                )
              })
            }
          </Slider>
        </div>
        {/* ボタン */}
        {
          button &&
          <button
            onClick={toPage}
            type="button"
          >
            {button.text}
            <i className="fas fa-chevron-right"/>
          </button>

        }
      </div>
  </Wrapper>
  )
}

const Wrapper = styled.div`
    margin: 0 auto;
    width: 90%;
    margin-bottom: 0px;
    display: grid;
    gap: 40px;
    align-items: center;
    /* イメージ画像 */
    & > img {
      width: 90%;
      max-width: 180px;
      margin: 0 auto;
    }
    /* タイトル＆説明＆ボタン */
    & > div {
      width: 90%;
      margin: 0 auto;
      /* タイトル */
      & > h1 {
        text-align: start;
        font-size: 50px;
        margin-bottom: 5px;
        font-weight: 600;
        color: #333;
      }
      & > h2 {
        text-align: start;
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 20px;
        color: #333;
      }
      /* 説明 */
      & > div {
        margin: 0 auto;
        text-align: justify;
        & > p {
          margin-bottom: 5px;
          font-size: 14.5px;
          color: dimgray;

          &:last-child {
            margin-bottom: 0px;
          }
        }
      }
      /* ボタン */
      & > button {
        margin-top: 10px;
        background-color: white;
        border: 2px solid steelblue;        
        display: block;
        padding: 8px 25px 8px 20px;
        width: 100%;
        border-radius: 10px;
        font-size: 14px;
        color: steelblue;
        position: relative;
        transition: all 0.3s ease;
        & > i {
          position: absolute;
          top: 50%;
          right:  8px;
          font-size: 12px;
          transform: translateY(-50%);
          color: steelblue;
          transition: all 0.3s ease;
        }
        &:hover {
          background-color: steelblue;
          color:white;
          & > i {
            color: white;
          }
        }
      }
    }

  
  @media screen and (min-width: 768px) {
      grid-template-columns: 0.4fr 0.6fr;
      gap: 20px;
      & > img {
        max-width: 240px;
      }
      & > div {
        & > h1 {
          text-align: start;
        }
      }
    }
  

`