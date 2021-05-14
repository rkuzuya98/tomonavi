/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { SlideContents } from './SlideContents';
import { SliderButtons } from './SliderButtons';

export const Slider = ({
  children,
  contentsHeight,
}) => {
  const slides = children
  const [currentSlide, setCurrentSlide] = useState(0);
  const hdCurrentSlide = (index) => setCurrentSlide(index)
  return (
    <Wrapper height={contentsHeight}>
      <SlideContents
        slides={slides}
        currentSlide={currentSlide}
        height={contentsHeight}
      />
      {/* スライドボタン */}
      <SliderButtons
        slides={slides}
        currentSlide={currentSlide}
        hdCurrentSlide={hdCurrentSlide}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* スライドボタン */
  & > div:last-child {
    
  }
`