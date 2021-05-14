import React from 'react'
import styled, { css } from 'styled-components'


type SlideContentsProps = ({
  slides: JSX.Element[]
  currentSlide: number
  height: string
})

export const SlideContents: React.FC<SlideContentsProps> = ({
  slides,
  currentSlide,
  height
}) =>
  <Wrapper height={height}>
    {
      slides.map((slide,index) => {
        let id;
        if (currentSlide === index) {
          id = "currentSlide"
        } else if (currentSlide > index) {
          id = "prevSlide"
        } else if (currentSlide < index) {
          id = "nextSlide"
        }
        return (
          <div
            key={slide.key}
            id={id}
          >
            {
              currentSlide === index &&
              slide
            }
          </div>
        )
      }
      )
    }
  </Wrapper>

type WrapperProps = ({
  height: string
})

const Wrapper = styled.div<WrapperProps>`
  margin: 0 auto;
  width: 100%;
  ${({ height }) => height && css`
    min-height: ${height};
  `};
    & > div {
    transition: all 0.3s ease;
    &#currentSlide {
      opacity: 1;
    }
    &#prevSlide {
      opacity: 0;
      transform: translateX(-50px);
    }
    &#nextSlide {
      opacity: 0;
      transform: translateX(50px);
    }
  }
`