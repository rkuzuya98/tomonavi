/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { isTemplateLiteral } from 'typescript';
// eslint-disable-next-line import/no-cycle
import { StockData } from '../../App';

export const Image = ({
  value,
  dataUpdate,
  validation,
  selectItems,
  templateList
}) => {

  // 送信しない登録情報を一時的に保持
  const [stockData, setStockData] = useContext(StockData)

  // アップロード用タグの取得
  const InputEl = useRef(null)

  // 画像（最終的なデータ）の入力状態
  const [image,setImage] = useState(value)
  // 画像の入力操作
  const handleImage = (url) => {
    // データの状態を変更
    setImage(url)
    // データの入力状態を変更
    dataUpdate(url)
    // データの入力状態をバリデーション
    validation(url)
  }
  
  // アップロードエリアの開閉
  const [uploadArea,setUploadArea] = useState(false)
  // アップロード画像
  const [uploadingFile, setUploadingFile] = useState(value)
  // テンプレートエリアの開閉
  const [tempArea,setTempArea] = useState(false)
  // テンプレート画像の選択状態
  const [tempImage,setTempImage] = useState(null)

  
  // アップロードエリアの開閉処理
  const handleUploadedFile = () => {
    if (tempArea === false && uploadArea === false) {
      setUploadArea(!uploadArea)
    } else {
      setUploadArea(!uploadArea)
      setTempArea(!tempArea)
    }
    handleImage(uploadingFile)
  }
  // テンプレートエリアの開閉処理
  const handleTemplate = () => {
    if (tempArea === false && uploadArea === false) {
      setTempArea(!tempArea)
    } else {
      setTempArea(!tempArea)
      setUploadArea(!uploadArea)
    }
    handleImage(templateList[tempImage])
  }
  // アップロード画像の選択処理
  const handleUploadingFile = (url) => {
    setUploadingFile(url)
  }
  // アップロード処理
  const handleFile = () => {
    const reader = new FileReader();
    reader.onload = (e) => {
      handleImage(e.target.result)
      handleUploadingFile(e.target.result)
      setStockData(e.target.result)
      // setUploadingFile("e.target.result")
      // console.log("e.target.result")
      // console.log(e.target.result)
      const newStockData = 
      stockData === null ?
      {uploadingFile: e.target.result} :
      stockData

      newStockData.uploadingFile = e.target.result
      setStockData(newStockData)
    }
    reader.readAsDataURL(InputEl.current.files[0])
  }
  // テンプレート画像の選択処理
  const handleTempImage = (index,item) => {
    setTempImage(index)
    handleImage(item)

    const newStockData = 
    stockData === null ? 
    {tempImage: item} : 
    stockData

    newStockData.tempImage = item

    // {tempImage: item}

    setStockData(newStockData)
  }


  // データ項目の移動に対応
  useEffect(()=>{
    // 保持中の値を再格納
    setImage(value)
    handleUploadingFile(stockData?.uploadingFile)
    setTempImage(templateList.indexOf(stockData?.tempImage))
    // チェック項目の再入力
    if (value === "") {
      setUploadArea(false)
      setTempArea(false)
    } else if (templateList.indexOf(value) === -1) {
      setUploadArea(true)
      setTempArea(false)
    } else {
      setUploadArea(false)
      setTempArea(true)
    }
    // templateLogos.indexOf(stockData) === -1 && value
  },[])

  console.log({image})
  console.log({uploadArea})
  console.log({uploadingFile})
  console.log({tempArea})
  console.log({tempImage})
  console.log({stockData})
  console.log(stockData)


  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <Wrapper
      uploadArea={uploadArea}
      tempArea={tempArea}
      tempImage={tempImage}
    >
      <div>
        <input
          type="checkbox"
          onChange={handleUploadedFile}
          checked={uploadArea}
          />
        <label>画像をアップロード</label>
        <div>
          <input
            type="file"
            ref={InputEl}
            onChange={handleFile}
            checked={tempArea}
          />
          <img
            alt="uploadedFile"
            src={uploadingFile}
          />
        </div>
      </div>
      <div>
        <input
          type="checkbox"
          onChange={handleTemplate}
          checked={tempArea}
        />
        <label>テンプレート画像</label>
        <div>
          <ul>
            {
              templateList.map((item,index) => {
                console.log("")
                return (
                  <li
                    key={item}
                    onClick={() => handleTempImage(index,item)}
                    onKeyDown={() => handleTempImage(index)}
                  >
                    <img
                      alt="img"
                      src={item}
                    />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      {/* <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > div {
    &:first-child {
      & > div {
        ${({ uploadArea }) => uploadArea || css`
          opacity: 0;
          height: 0;
          pointer-events: none;
        `};
        display: flex;
        flex-flow: column;
        & > img {
          width: 200px;
        }
      }
    }
    &:last-child {
      & > div {
        ${({tempArea}) => tempArea || css`
          opacity: 0;
          height: 0;
          pointer-events: none;
        `};
      }
      & ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 5px;
        & > li {
          ${({tempImage}) => tempImage + 1 && css`
            &:nth-child(${tempImage + 1}) {
              border: 5px solid red;
            }
          `}
        }
        & img {
          width: 100%;
        }
      }
    }
  }

  /* & label {
    border: 2px solid ${props=>props.theme.colors.accentM2};
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 5px;
    &:hover {
      border: 2px solid ${props=>props.theme.colors.accent0};
    }
    & > input {
      background-color: green;
      border: none;
    }
  } */

`