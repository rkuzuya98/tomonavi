/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { Breadcrumbs } from '../component/breadcrumbs/Breadcrumbs'
import { TopArea } from '../component/contact/TopArea'
import { FAQ } from '../component/contact/FAQ'
import { ContactForm } from '../component/contact/ContactForm'
import { OpinionBox } from '../component/contact/OpinionBox'
import { Tile } from '../component/tile/Tile'

export const Contact = () => {

  const location = useLocation()
  
  // タグ参照
  const faqAlt = useRef(null)
  const contactFormAlt = useRef(null)
  const opinionBoxAlt = useRef(null)

  // スクロール処理
  const pageScroll = (altEl: any) => altEl.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })

  return (
    <Wrapper>
      <Breadcrumbs location={location}/>
      <Tile type="topArea">
        <TopArea
          pageScroll={pageScroll}
          faqAlt={faqAlt}
          contactFormAlt={contactFormAlt}
          opinionBoxAlt={opinionBoxAlt}
        />
      </Tile>
      <Tile>
        <div
          ref={faqAlt}
          style={{ transform: "translateY(-130px)" }}
        />
        <FAQ/>
      </Tile>
      <Tile>
        <div
          ref={contactFormAlt}
          style={{ transform: "translateY(-130px)" }}
        />
        <ContactForm/>
      </Tile>
      <Tile>
        <div
          ref={opinionBoxAlt}
          style={{ transform: "translateY(-130px)" }}
        />
        <OpinionBox/>
      </Tile>
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