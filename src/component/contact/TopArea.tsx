/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { PageTop } from '../pageTop/PageTop'
import { TopAreaContent1 } from './TopAreaContent1'
import { TopAreaContent2 } from './TopAreaContent2'
import { TopAreaContent3 } from './TopAreaContent3'
import { TopAreaContent4 } from './TopAreaContent4'

type TopAreaProps = ({
  pageScroll: (altEl: HTMLDivElement) => void
  faqAlt: any
  // faqAlt: HTMLDivElement | null
  contactFormAlt: any
  // contactFormAlt: HTMLDivElement | null
  opinionBoxAlt: any
  // opinionBoxAlt: HTMLDivElement | null
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
    title="CONTACT"
    subtitle="お問い合わせ"
    image={{
      src: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2F017-drawkit-support-woman-colour.jpeg?alt=media&token=49f4101e-3c1b-4c7a-b910-9bc037345164",
      alt: "contactImage"
    }}
    contents={[
      <TopAreaContent1 key="first"/>,
      <TopAreaContent2
        key="second"
        onClick={() => pageScroll(faqAlt)}
      />,
      <TopAreaContent3
        key="third"
        onClick={() => pageScroll(contactFormAlt)}
      />,
      <TopAreaContent4
        key="fourth"
        onClick={() => pageScroll(opinionBoxAlt)}      
      />,
    ]}
    contentsHeight="120px"
  />