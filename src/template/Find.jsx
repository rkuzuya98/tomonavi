/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { Card } from '../component/commCard/Card'
import { ResultOrder } from '../component/searchField/ResultOrder'
import { BlankSpace } from '../component/UIKit/BlankSpace'

import { Tile } from '../component/UIKit/TileJ'
import { PageTop } from '../component/UIKit/PageTop'
import { getComms } from '../asynchronous/getComms'
import { ModalWindow } from '../component/modalWindow/ModalWindowJ'
import { Breadcrumbs } from '../component/breadcrumbs/BreadcrumbsJ'
import { NarrowDown } from '../component/community/NarrowDown'

export const Find = () => {

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

  useEffect(() => {
    // コミュニティ情報を取得
    getComms(setComms,order,currentTheme,currentPlace)
  },[order,currentTheme,currentPlace])

  

  return (
    <Wrapper>
      <Breadcrumbs
      />
      <Tile>
        <PageTop
          title="コミュニティを見つける"
          image={{
            src: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2F049-choices-colour.svg?alt=media&token=000c280e-c1f8-4a81-85da-fa407341f9ee",
            alt: "findImage"
          }}
          explnation={[
            "ともナビでは「分野・テーマ」と「開催場所」の二つの条件であなたにマッチするコミュニティを見つけることができます。",
            "コミュニティに関する詳細な情報は各コミュニティページに掲載されていますのでそちらをご確認ください。"
          ]}
        />
        <NarrowDown
          comms={comms}
          setComms={setComms}
          currentTheme={currentTheme}
          handleCurrentTheme={handleCurrentTheme}
          currentPlace={currentPlace}
          handleCurrentPlace={handleCurrentPlace}
        />
        <BlankSpace height="60px"/>
        <ResultOrder
          order={order}
          handleOrder={handleOrder}
        />
        <BlankSpace height="40px"/>
        <ul>
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
                <li key={comm?.name}>
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
                    comm={comm}
                    handleModal={handleModal}
                  />
                </li>
              )
            }
            )
          }
        </ul>
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
  /* position: relative; */
  & > div {
    & > ul {
      width: 90%;
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      & > li {
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 768px) {
    & > div {
      & > ul {
        width: 80%;
      }
    }
  }
`