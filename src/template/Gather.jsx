/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'

import { Tile } from '../component/UIKit/TileJ'
import { PageTop } from '../component/UIKit/PageTop'
import { Breadcrumbs } from '../component/breadcrumbs/Breadcrumbs'
import { ModalWindow } from '../component/modalWindow/ModalWindowJ'
import { CommingSoon } from '../component/UIKit/CommingSoon'

export const Gather = () => {

  const location = useLocation()

  // モーダルウィンドウの状態
  const [modal, setModal] = useState(false)
  const handleModal = () => setModal(!modal)

  return (
    <Wrapper>
      <Breadcrumbs
        firstPathName="広める"
      />
      {/* <Tile>
        <PageTop
          title="コミュニティを広める"
          image={{
            src: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2F001-drawkit-content-man-colour.svg?alt=media&token=478bcd9f-437f-4159-94cd-6ed5c04582f9",
            alt: "gatherImage"
          }}
          explnation={[
            // "ともナビは「セルフケアコミュニティを必要としている参加者」と「セルフケアコミュニティを提供している主催者」を繋ぐ",
            "ともナビでは参加者が抱えているセルフコミュニティへの「不安」や「疑念」のような参加ハードルに寄り添えるサービス作りを行なっています。",
            "ともナビのサービス理念に共感いただいた主催者の方はぜひともナビに登録していただき、必要としている人に情報を届けられるサービス作りの一端を担っていただければ幸いです。"
          ]}
        />
      </Tile> */}
      <Tile>
        {/* <h3></h3> */}
        <CommingSoon/>
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
  & > div {
  }
  @media screen and (min-width: 768px) {
    & > div {
      & > ul {
        width: 80%;
      }
    }
  }
`