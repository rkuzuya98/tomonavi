import React, { useState } from 'react'
import { SlideContents } from './SlideContents';
import { SliderButtons } from './SliderButtons';

type SliderProps = ({
  children: JSX.Element[]
  contentsHeight: string
})

export const Slider: React.FC<SliderProps> = ({
  children,
  contentsHeight,
}) => {
  // 子要素を「slides」という名前で扱う
  const slides = children
  // 現在選択中のスライド
  const [currentSlide, setCurrentSlide] = useState(0);
  // スライドの選択処理
  const hdCurrentSlide = (index: number) => setCurrentSlide(index)
  return (
    <div>
      <SlideContents
        slides={slides}
        currentSlide={currentSlide}
        height={contentsHeight}
      />
      <SliderButtons
        slides={slides}
        currentSlide={currentSlide}
        hdCurrentSlide={hdCurrentSlide}
      />
    </div>
  )
}