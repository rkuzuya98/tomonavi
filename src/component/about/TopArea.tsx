/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { PageTop } from '../pageTop/PageTop'
import { TopAreaContent1 } from './TopAreaContent1'
import { TopAreaContent2 } from './TopAreaContent2'
import { TopAreaContent3 } from './TopAreaContent3'
import { TopAreaContent4 } from './TopAreaContent4'

type TopAreaProps = ({
  pageScroll?: (altEl: HTMLDivElement) => void
  faqAlt?: any
  contactFormAlt?: any
  opinionBoxAlt?: any
})

export const TopArea: React.FC<TopAreaProps> = ({
  pageScroll,
  faqAlt,
  contactFormAlt,
  opinionBoxAlt,
}) =>
  // faqAlt &&
  // contactFormAlt &&
  // opinionBoxAlt &&
  <PageTop
    title="ABOUT"
    subtitle="ともナビとは"
    image={{
      src: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2F059-support-notes-colour.svg?alt=media&token=84d307e0-6fb3-4f2f-ae75-9d615176ab99",
      alt: "aboutImage"
    }}
    contents={[
      <TopAreaContent1 key="first"/>,
      // <TopAreaContent2
      //   key="second"
      //   onClick={() => pageScroll(faqAlt)}
      // />,
      // <TopAreaContent3
      //   key="third"
      //   onClick={() => pageScroll(contactFormAlt)}
      // />,
      // <TopAreaContent4
      //   key="fourth"
      //   onClick={() => pageScroll(opinionBoxAlt)}      
      // />,
    ]}
    contentsHeight="120px"
  />