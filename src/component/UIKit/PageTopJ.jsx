/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

export const PageTop = ({
  title,
  image,
  explnation,
  button
}) => {
  const history = useHistory()
  const toPage = () => history.push(button?.url)
  return (
  <Wrapper>
    <div>
      <img
        alt={image.alt}
        src={image.src}
      />
      <div>
        <h1>{title}</h1>
        <div>
          {
            explnation.map((item) => 
              <p key={item}>{item}</p>
            )
          }
        </div>
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
    </div>
  </Wrapper>
  )
}

const Wrapper = styled.div`
  & > div:first-child {
    margin: 0 auto;
    width: 90%;
    margin-bottom: 0px;
    display: grid;
    gap: 40px;
    align-items: center;
    & > img {
      /* margin-left: 20px; */
      width: 90%;
      /* width: 20%; */
      margin: 0 auto;
    }
    & > div {
      width: 90%;
      margin: 0 auto;
      & > h1 {
      }
      & > div:nth-of-type(1) {
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
      & > button {
        margin-top: 10px;
        background-color: white;
        border: 2px solid steelblue;        
        display: block;
        padding: 8px 25px 8px 20px;
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
  }

  
  @media screen and (min-width: 768px) {
    & > div {
      grid-template-columns: 0.4fr 0.6fr;
      gap: 20px;
      & > img {
      }
      & > div {
        & > h1 {
          text-align: start;
        }
      }
    }
  }

`