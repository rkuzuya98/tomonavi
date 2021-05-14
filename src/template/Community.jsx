/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { Card } from '../component/commCard/Card'
import { BlankSpace } from '../component/UIKit/BlankSpace'

import { Tile } from '../component/UIKit/TileJ'
import { getComms } from '../asynchronous/getComms'
import { ModalWindow } from '../component/modalWindow/ModalWindowJ'
import DotsLoader from '../component/loading/DotsLoader'
import { Breadcrumbs } from '../component/breadcrumbs/Breadcrumbs'
import { PageTop } from '../component/UIKit/PageTop'
import { ResultOrder } from '../component/community/ResultOrder'
import { NarrowDown } from '../component/community/NarrowDown'
import { CommCards } from '../component/community/CommCards'


export const Community = () => {

  // 表示中のコミュニティ
  const [comms, setComms] = useState([])

  // 表示順（最終更新||お気に入り||ページ充実度）
  const [order, setOrder] = useState("updated_at")
  const handleOrder = (newOrder) => setOrder(newOrder)

  // 絞り込み条件（分野・テーマ||null）
  const [currentTheme, setCurrentTheme] = useState(null)
  const handleCurrentTheme = (item) => setCurrentTheme(item)
  // 絞り込み条件（開催場所||null）
  const [currentPlace, setCurrentPlace] = useState(null)
  const handleCurrentPlace = (item) => setCurrentPlace(item)

  const location = useLocation()

  // モーダルウィンドウの状態
  const [modal, setModal] = useState(false)
  const handleModal = () => setModal(!modal)


  const [loading, setLoading] = useState(true)
  const handleLoading = (state) => setLoading(state)

  useEffect(() => {
    const a = async() => {
      // コミュニティ情報を取得
      await getComms(setComms,order,currentTheme,currentPlace)
      handleLoading(false)
    }
    a()

  },[order,currentTheme,currentPlace])

  

  return (
    <Wrapper>
      <Breadcrumbs location={location}/>
      <Tile id="firstTile">
        <PageTop
          title="コミュニティを見つける"
          image={{
            src: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2F049-choices-colour.svg?alt=media&token=000c280e-c1f8-4a81-85da-fa407341f9ee",
            alt: "findImage"
          }}
          explanation={[
            "ともナビでは「分野・テーマ」と「開催場所」の二つの条件であなたにマッチするコミュニティを見つけることができます。",
            "コミュニティに関する詳細な情報は各コミュニティページに掲載されていますのでそちらをご確認ください。"
          ]}
        />
      </Tile>
      <Tile
        loading={loading}
      >
        <NarrowDown
          comms={comms}
          setComms={setComms}
          currentTheme={currentTheme}
          hdCurrentTheme={handleCurrentTheme}
          currentPlace={currentPlace}
          hdCurrentPlace={handleCurrentPlace}
        />
        <BlankSpace height="60px"/>
        <ResultOrder
          order={order}
          handleOrder={handleOrder}
        />
        <BlankSpace height="40px"/>
        <CommCards
          comms={comms}
          handleModal={handleModal}
        />

        {/* <ul>
          {
            comms.map((comm) => {
              const updatedDate = comm?.updated_at?.toDate()
              const year = updatedDate?.getFullYear()
              const month = updatedDate?.getMonth() + 1
              const editedMonth = String(month).length === 1 ? `0${month}` : month
              const date = updatedDate?.getDate()
              const editedDate = String(Date).length === 1 ? `0${date}` : date
              const update = `${year}.${editedMonth}.${editedDate}`
              return (
                <li
                key={comm?.name}
                style={{
                  width: "100%",
                  maxWidth: "700px",
                  margin: "0 auto"
                }}>
                  <Card
                    name={comm?.name}
                    summary={comm?.summary}
                    theme={comm?.theme}
                    place={comm?.place}
                    logo={comm?.logo}
                    icon={comm?.mgData?.icon}
                    update={update}
                    favoriteNumber={comm?.favorite_number}
                    enrichment={comm?.enrichment}
                    id={comm?.id}
                    url={comm?.url}
                    comm={comm}
                    handleModal={handleModal}
                  />
                </li>
              )
            }
            )
          }
        </ul> */}
      </Tile>
      {
        modal &&
        <ModalWindow
          handleModal={handleModal}
        />
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > div#secondTile {
    & > ul {
      background-color: red;

      width: 90%;
      /* display: grid; */
      /* grid-template-columns: 1fr; */
      /* gap: 20px; */
      & > li {
        width: 100%;

        width: 200px;
        height: 300px;
        display: block;
      }
    }
  }
  @media screen and (min-width: 768px) {
    & > div#secondTile {
      & > ul {
        width: 80%;
      }
    }
  }
`