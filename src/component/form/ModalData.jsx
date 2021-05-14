/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { ageList } from '../../data/age';
import { templateIconList } from '../../data/icon';
import { templateLogoList } from '../../data/logo';
import { PlaceList } from '../../data/place';
import { sexList } from '../../data/sex';
import { themeList } from '../../data/theme';
import { Image } from './Image';
import { Select } from './Select';
import { Sentence } from './Sentence';
import { Text } from './Text';

export const ModalData = ({
  dataList,
  value,
  dataUpdate,
  handleDoneIndex
}) =>
  <Wrapper>
    <div/>
    {
      dataList.type === "text" &&
      <Text
        value={value}
        dataUpdate={dataUpdate}
        validation={
          (data) => {
            (
              data === '' ||
              data === 'a'
            ) ?
            handleDoneIndex("remove") :
            handleDoneIndex("add") 
          }
        }
        span={dataList.eng === "url" && "urlPath"}
      />
    }
    {
      dataList.type === "sentence" &&
      <Sentence
        value={value}
        dataUpdate={dataUpdate}
        validation={
          (data) => {
            (
              data === '' ||
              data === 'a'
            ) ?
            handleDoneIndex("remove") :
            handleDoneIndex("add") 
          }
        }
      />
    }
    {
      dataList.type === "image" &&
      <Image
        value={value}
        dataUpdate={dataUpdate}
        validation={
          (data) => {
            (
              data === '' ||
              data === undefined
            ) ?
            handleDoneIndex("remove") :
            handleDoneIndex("add") 
          }
        }
        templateList={
          dataList.eng === "icon" ?
          templateIconList :
          dataList.eng === "logo" ?
          templateLogoList :
          null
        }
      />
    }
    {
      dataList.type === "select" &&
      <Select
        value={value}
        dataUpdate={dataUpdate}
        validation={
          (data) => {
            (
              data.length === 0
            ) ?
            handleDoneIndex("remove") :
            handleDoneIndex("add") 
          }
        }
        selectItems={
          dataList.eng === "theme" ?
          themeList :
          dataList.eng === "place" ?
          PlaceList :
          dataList.eng === "age" ?
          ageList :
          dataList.eng === "sex" ?
          sexList :
          null
        }
        inputType={
          dataList.eng === "theme" ?
          "checkbox" :
          dataList.eng === "place" ?
          "checkbox" :
          dataList.eng === "age" ?
          "radio" :
          dataList.eng === "sex" ?
          "radio" :
          null
        }
      />
    }
  </Wrapper>

const Wrapper = styled.div`
  & > div:first-child {
    display: flex;
    align-items: center;
    margin: 10px 0 0px 5px;
    & > i {
      margin-left: 5px;
    }
  }
`