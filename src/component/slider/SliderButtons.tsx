import React from 'react'
import styled from 'styled-components'

type SliderButtonsProps = ({
  slides: JSX.Element[]
  currentSlide: number
  hdCurrentSlide: (index: number) => void
})

export const SliderButtons: React.FC<SliderButtonsProps> = ({
  slides,
  currentSlide,
  hdCurrentSlide
}) =>
  <Wrapper>
    {
      slides.map((slide,index) =>
        <button
          type="button"
          key={slide.key}
          onClick={() => hdCurrentSlide(index)}
          id={
            currentSlide === index ?
            "currentSlideBtn" :
            "not-currentSlideBtn"
          }
        >
          <span/>
        </button>
      )
    }
  </Wrapper>

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  & > button {
    background-color: steelblue;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    border: 3px solid steelblue;
    margin: 0 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: khaki;
    }
    &#currentSlideBtn {
      background-color: white;
    }
  } 
`
