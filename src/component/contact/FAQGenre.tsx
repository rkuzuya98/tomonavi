/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import styled from 'styled-components'

type FAQGenreProps = ({
  genre: string
  addGenres: (addingItem: number) => void
  removeGenres: (removingItem: number) => void
  index: number
  genres: number[]
})

export const FAQGenre:React.FC<FAQGenreProps> = ({
  genre,
  addGenres,
  removeGenres,
  index,
  genres
}) => {
  const handleGenre = () => {
    genres.includes(index) ?
    removeGenres(index) :
    addGenres(index)
  }
  return (
    <Wrapper>
      <span
        onClick={handleGenre}
      >
        {genre}
      </span>
      <button
        type="button"
        onClick={handleGenre}
      >
        {
          genres.includes(index) ?
          <i className="fas fa-chevron-up"/> :
          <i className="fas fa-chevron-down"/>
        }
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-bottom: 1px solid rgba(0,0,0,0.2);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0 15px 0;
  font-weight: bold;
  font-size: 14px;
  & > span {
    margin-left: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.5;
    }
  }
  & > button {
    background-color: rgba(0,0,0,0);
    border: none;
    transform: translateX(-10px);
    width: 30px;
    height: 30px;
    border-radius: 40%;
    transition: all 0.3s ease;
    & > i {
      transition: all 0.3s ease;
    }
    &:hover {
      background-color: rgba(70,130,180,0.3);
      & > i {
        color: white;
      }
    }
  }
`