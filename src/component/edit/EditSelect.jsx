/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect } from 'react'
import styled from 'styled-components'

export const EditSelect = ({
  value,
  reset,
  handleReset,
  handleUpdatingData,
  buttonType,
  selectingItems
}) => {
  
  // リセット発動時にリセット処理を行う
  useEffect(() => {
    reset !== null && handleUpdatingData(reset)
    handleReset(null)
  },[handleReset, handleUpdatingData, reset])

  return (
    <Wrapper>
      <form>
        {
          selectingItems.map((sectionItems) => {
            const objectKey = Object.keys(sectionItems)[0]
            const objectValue = Object.values(sectionItems)[0]
            return (
              <div key={objectKey}>
                <p>{objectKey}</p>
                {
                  objectValue.map((item) =>
                  <label
                    key={item}
                    htmlFor="nameOfInput"
                  >
                    <input
                      type={buttonType}
                      value={item}
                      onChange={(e) => {
                        // 複数選択の場合
                        if (buttonType === "checkbox") {
                          const newValue = [...value]
                          // 削除処理
                          if (newValue.includes(e.target.value)) {
                            newValue.splice(newValue.findIndex(element => element === e.target.value), 1)
                            // 追加処理
                          } else {
                            newValue.push(e.target.value)
                          }
                          handleUpdatingData(newValue)
                        // 単数選択の場合
                        } else {
                          handleUpdatingData(e.target.value)
                        }
                      }}
                      checked={value?.includes(item)}
                    />
                    <span>{item}</span>
                  </label>
                )
                }
              </div>
            )
          })
        }
      </form>
      <input
        value={value}
        onChange={(e) => {
          handleUpdatingData(e.target.value)
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > input {
    
  }
`