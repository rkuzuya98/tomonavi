import React from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { TopArea } from '../../component/about/TopArea'
import { Breadcrumbs } from '../../component/breadcrumbs/Breadcrumbs'
import { Tile } from '../../component/tile/Tile'
import { BlankSpace } from '../../component/UIKit/BlankSpace'
import { CommingSoon } from '../../component/UIKit/CommingSoon'
import { Features } from '../../component/about/features/Features'

export const About = () => {

  // ページのURL情報を取得
  const location = useLocation();

  return (
    <Wrapper>
      <Breadcrumbs
        location={location}
      />
      {/* <Tile> */}
      <Tile type="topArea">
        <TopArea
          // pageScroll={pageScroll}
          // faqAlt={faqAlt}
          // contactFormAlt={contactFormAlt}
          // opinionBoxAlt={opinionBoxAlt}
        />
        <BlankSpace
          height="40px"
        />
      </Tile>
      <Tile>
        <Features/>
      </Tile>
      <Tile>
        <CommingSoon/>
      </Tile>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`