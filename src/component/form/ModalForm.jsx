/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import styled from 'styled-components'
import { ModalContent } from './ModalContent'

export const ModalForm = ({
  title,
  handleModalForm,
  toPage,
  creatingData,
  creatingList,
  submitFunction
}) => 
  <Wrapper>
    <ModalContent
      handleModalForm={handleModalForm}
      toMgComm={toPage}
      title={title}
      creatingData={creatingData}
      creatingList={creatingList}
      submitFunction={submitFunction}
    />
  </Wrapper>


const Wrapper = styled.div`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  left: 0;
  top:0;
  right: 0;
  bottom: 0;
  & > div {
    position: fixed;
    background-color: white;
    /* top: 50%; */
    /* transform: translateY(-50%); */
    left: 20px;
    right: 20px;
    bottom: 20px;
    top: 80px;
    max-width: 500px;
    /* max-height: 450px; */
    margin: 0 auto;
    padding: 30px;
    border-radius: 10px;
  }
`
