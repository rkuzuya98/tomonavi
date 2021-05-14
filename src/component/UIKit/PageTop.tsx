import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

type PageTopProps = ({
  title: string
  image: {
    alt: string
    src: string
  }
  explanation: string[]
  button? : {
    url: string
    text: string
  }
})

export const PageTop:React.FC<PageTopProps> = ({
  title,
  image,
  explanation,
  button
}) => {
  const history = useHistory()
  const toPage = () => button && history.push(button.url)
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
        {/* 説明 */}
        <div>
          {
            explanation.map((item) => 
              <p key={item}>{item}</p>
            )
          }
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
      max-width: 140px;
      margin: 0 auto;
    }
    /* タイトル＆説明＆ボタン */
    & > div {
      width: 90%;
      margin: 0 auto;
      /* タイトル */
      & > h1 {
        font-size: 40px;
      }
      /* 説明 */
      & > div {
        margin: 0 auto;
        text-align: justify;
        & > p {
          margin-bottom: 5px;
          font-size: 14px;
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