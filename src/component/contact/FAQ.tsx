import React, { useState } from 'react'
import styled from 'styled-components'
import { H2 } from '../tile/H2'
import { faqData } from './faqData'
import { FAQGenre } from './FAQGenre'
import { FAQQuestions } from './FAQQuestions'

export const FAQ = () => {
  const [genres, setGenres] = useState<number[]>([])

  const addGenres = (addingItem: number) => {
    const altGenres = [...genres]
    altGenres.push(addingItem)
    setGenres(altGenres)
  }
  const removeGenres = (removingItem: number) => {
    const altGenres = [...genres].filter(n => n !== removingItem)
    // altGenres.filter(n => n !== removingItem)
    // console.log("hi")
    // console.log(altGenres)
    setGenres(altGenres)
  }

  console.log(genres)

  return (
    <Wrapper>
      <H2
        h2="よくある質問"
        p="みなさまから寄せられたよくあるご質問を掲載しています。お問い合わせ前に一度ご確認ください。"
      />
      <ul>
        {
          faqData.map((item, index) => {
            const b = ""
            return (
              <li key={item.genre}>
                <FAQGenre
                  genre={item.genre}
                  index={index}
                  genres={genres}
                  addGenres={addGenres}
                  removeGenres={removeGenres}
                />
                {/* {
                  genres.includes(index) && */}
                  <FAQQuestions
                    questions={item.questions}
                    display={genres.includes(index)}
                  />
                {/* } */}
              </li>
            )
          })
        }
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 90%;
  max-width: 500px;
  display: grid;
  & > ul {
    width: 100%;
    & > li {
      width: 100%;
    }
  }
`