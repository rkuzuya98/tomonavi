import React, { useState } from 'react'
import styled from 'styled-components'
import { PlaceList } from '../../data/place'
import { themeList } from '../../data/theme'
import { NarrowContent } from './NarrowContent'
import { UpperWindow } from '../modalWindow/UpperWindow'
import { CommunityProps } from '../../type/CommunityProps'

type NarrowDownProps = ({
  comms: CommunityProps[]
  currentTheme: string | null
  hdCurrentTheme: (item: string | null) => void
  currentPlace: string | null
  hdCurrentPlace: (item: string | null) => void
})

export const NarrowDown: React.FC<NarrowDownProps> = ({
  comms,
  currentTheme,
  hdCurrentTheme,
  currentPlace,
  hdCurrentPlace
}) => {
  
  // 分野・テーマ選択のモーダルウィンドウ
  const [themeWindow, setThemeWindow] = useState(false)
  const hdThemeWindow = () => setThemeWindow(!themeWindow)
  
  // 開催場所選択のモーダルウィンドウ
  const [placeWindow, setPlaceWindow] = useState(false)
  const hdPlaceWindow = () => setPlaceWindow(!placeWindow)

  return (
    <Wrapper>
      <h1>絞り込み条件</h1>
      {/* 分野・テーマ＆「X」＆開催場所 */}
      <div>
        <div>
          <p>分野・テーマ</p>
          <button
            type="button"
            onClick={hdThemeWindow}
          >
            <p>
              <i className="fas fa-search-plus"/>
              {
                currentTheme === null &&
                <span>全て</span>
              }
              {
                currentTheme &&
                <span>{currentTheme}</span>
              }
            </p>
          </button>
        </div>
        {/* 「X」アイコン */}
        <p>X</p>
        <div>
          <p>開催場所</p>
          <button
            type="button"
            onClick={hdPlaceWindow}
          >
            <p>
              <i className="fas fa-search-plus"/>
              {
                currentPlace === null &&
                <span>全て</span>
              }
              {
                currentPlace &&
                <span>{currentPlace}</span>
              }
            </p>
          </button>
        </div>
      </div>
      {/* 検索＆リセット */}
      <div>
        <div>
          <p>検索結果<span>{comms.length}</span>件</p>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              hdCurrentTheme(null)
              hdCurrentPlace(null)
              }
            }
          >
            リセット
          </button>
        </div>
      </div>
      {/* 分野・テーマの選択モーダルウィンドウ */}
      <UpperWindow
        display={themeWindow}
        handleDisplay={hdThemeWindow}
      >
        <NarrowContent
          handleWindow={hdThemeWindow}
          hdCurrent={hdCurrentTheme}
          current={currentTheme}
          selectItems={themeList}
        />
      </UpperWindow>
      {/* 開催場所の選択モーダルウィンドウ */}
      <UpperWindow
        display={placeWindow}
        handleDisplay={hdPlaceWindow}
      >
        <NarrowContent
          handleWindow={hdPlaceWindow}
          hdCurrent={hdCurrentPlace}
          current={currentPlace}
          selectItems={PlaceList}
        />
      </UpperWindow>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  max-width: 800px;
  border: 2px solid steelblue;
  border-radius: 10px;
  padding: 50px 0 0 0;

  & > h1 {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    background-color: white;
    padding: 0 15px;
  }

  /* 分野・テーマ＆「X」＆開催場所 */
  & > div:nth-of-type(1) {
    display: grid;
    gap: 20px;
    width: 80%;
    margin: 0 auto;
    align-items: center;
    /* 「X」アイコン */
    & > p {
      font-size: 30px;
      color: steelblue;
    }
    /* 分野・テーマ＆開催場所 */
    & > div {
      width: 100%;
      /* 絞り込みタイトル */
      & > P {
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 10px;
        color: steelblue;
      }
      /* 入力エリア */
      & > button {
        width: 100%;
        border: 2px solid steelblue;
        /* padding: 15px; */
        height: 50px;
        border-radius: 15px;
        background-color: white;
        position: relative;
        & > p {
          font-size: 16px;
          font-weight: bold;
          & > i {
            transition: all 0.2s ease;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 20px;
            color: steelblue;
            font-size: 20px;
          }
          & > span {
          }
        }
        &:hover {
          & > p {
            & > i {
              font-size: 26px;
            }
          }
        }
      }  
      
    }

    
  }
  /* 検索件数＆リセット */
  & > div:nth-of-type(2) {
    width: 100%;
    margin: 60px auto 0;
    display: grid;
    grid-template-columns: 0.7fr 0.3fr;
    background-color: steelblue;
    /* gap: 15px; */
    border-radius: 0 0 10px 10px;
    & > div {
      color: white;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      /* 検索件数 */
      &:first-child {
        border-radius: 0 0 0 10px;
        background-color: steelblue;
        transform: translate(-2px,2px);
        border: 2px solid steelblue;
        border-top: none;
        padding: 10px 0;
        & > p {
          font-weight: bold;
          color: white;
          & > span {
            font-size: 24px;
            margin: 0 5px;
            color: white;
          }
        }
      }
      /* リセットボタン */
      &:last-child {
        border-radius: 0 0 10px 0;
        color: steelblue;
        font-size: 16px;
        transform: translate(2px,2px);
        border: 2px solid steelblue;
        border-top: none;
        & > button {
          width: 100%;
          height: 100%;
          padding: 10px 0;
          border: none;
          border-radius: 0 0 10px 0;
          background-color: white;
          color: steelblue;
          transition: color 0.3s ease;
          transition: background-color 0.3s ease;
          &:hover {
            background-color: steelblue;
            color:white;
            border-left: 2px solid white;
          }
        }
      }

    }
  }
  @media screen and (min-width: 768px) {
    width: 80%;
    /* 分野・テーマ＆「X」＆開催場所 */
    & > div:nth-of-type(1) {
      width: 90%;
      grid-template-columns: 1fr 40px 1fr;
      /* 「X」アイコン */
      & > P {
        font-size: 40px;
      }
    }
    & > div:nth-of-type(2) {
      & > P {
        font-size: 40px;
      }
    }
  }
`