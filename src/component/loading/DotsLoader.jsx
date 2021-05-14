/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const DotsLoader = ({
  loading
}) => {

  // const [opacity, setOpacity] = useState(null);

  // useEffect(() => {
  //   setOpacity(1)
  //   return (
  //     setOpacity(0)
  //   )
  // })

  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <Wrapper
      loading={loading}
    >
      <span className='dots-loader'/>
    </Wrapper>
  )
}



const Wrapper = styled.div`
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  ${({ loading }) => !loading && css`
    opacity: 0;
    pointer-events: none;
    height: 0;
  `};
  transform: translateY(100px);

  & > span {
  }

  & {    
    @-moz-keyframes dots-loader {
      0% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
      }
      8.33% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
      }
      16.67% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
      }
      25% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
      }
      33.33% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px -14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px -14px 0 7px;
      }
      41.67% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
      }
      50% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
      }
      58.33% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
      }
      66.67% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
      }
      75% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
      }
      83.33% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        14px 14px 0 7px;
      }
      91.67% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
      }
      100% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
      }
    }
    @-webkit-keyframes dots-loader {
      0% {
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
      }
      8.33% {
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
      }
      16.67% {
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
      }
      25% {
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
      }
      33.33% {
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px -14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px -14px 0 7px;
      }
      41.67% {
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
      }
      50% {
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
      }
      58.33% {
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
      }
      66.67% {
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
      }
      75% {
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
      }
      83.33% {
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        14px 14px 0 7px;
      }
      91.67% {
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
      }
      100% {
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
      }
    }
    @keyframes dots-loader {
      0% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
      }
      8.33% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
      }
      16.67% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
      }
      25% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
      }
      33.33% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px -14px 0 7px;
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px -14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px -14px 0 7px;
      }
      41.67% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
      }
      50% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
      }
      58.33% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
      }
      66.67% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
      }
      75% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px -14px 0 7px, rgba(70, 130, 180, 0.4)
        14px -14px 0 7px;
      }
      83.33% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        14px 14px 0 7px;
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        14px 14px 0 7px;
      }
      91.67% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px 14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
      }
      100% {
        -moz-box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        -webkit-box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
        box-shadow: rgba(70, 130, 180, 1)
        -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
        14px -14px 0 7px, rgba(70, 130, 180, 0.6)
        14px 14px 0 7px, rgba(70, 130, 180, 0.4)
        -14px 14px 0 7px;
      }
    }
    /* :not(:required) hides this rule from IE9 and below */
    .dots-loader:not(:required) {
      overflow: hidden;
      position: relative;
      text-indent: -9999px;
      display: inline-block;
      width: 7px;
      height: 7px;
      background: transparent;
      border-radius: 100%;
      -moz-box-shadow: rgba(70, 130, 180, 1)
      -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
      14px -14px 0 7px, rgba(70, 130, 180, 0.6)
      14px 14px 0 7px, rgba(70, 130, 180, 0.4)
      -14px 14px 0 7px;
      -webkit-box-shadow: rgba(70, 130, 180, 1)
      -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
      14px -14px 0 7px, rgba(70, 130, 180, 0.6)
      14px 14px 0 7px, rgba(70, 130, 180, 0.4)
      -14px 14px 0 7px;
      box-shadow: rgba(70, 130, 180, 1)
      -14px -14px 0 7px, rgba(70, 130, 180, 0.8)
      14px -14px 0 7px, rgba(70, 130, 180, 0.6)
      14px 14px 0 7px, rgba(70, 130, 180, 0.4)
      -14px 14px 0 7px;
      -moz-animation: dots-loader 5s infinite ease-in-out;
      -webkit-animation: dots-loader 5s infinite ease-in-out;
      animation: dots-loader 5s infinite ease-in-out;
      -moz-transform-origin: 50% 50%;
      -ms-transform-origin: 50% 50%;
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
  }
`

export default DotsLoader;