/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Breadcrumbs } from '../component/breadcrumbs/Breadcrumbs';
import DotsLoader from '../component/loading/DotsLoader';
import { BlankSpace } from '../component/UIKit/BlankSpace';
import { Hr } from '../component/UIKit/Hr';
import { Tile } from '../component/UIKit/TileJ';
import { mgCommCreatingData } from '../data/mgComm';
import { db } from '../firebase/config';

export const CommPage = () => {

  const [loading, setLoading] = useState(true)
  const handleLoading = (state) => setLoading(state)


  const { commPath } = useParams()

  const [commData, setCommData] = useState(null)


  
  

  useEffect(() => {
    const commsRef = db.collection("communities")
    commsRef
    .where("url", "==", commPath)
    .get()
    .then((snapshot) => {
      snapshot.docs.map((doc) => {
        const docData = doc.data()
        setCommData(docData)
        handleLoading(false)
      })
    })
  },[])

  return (
    <Wrapper>
      <Breadcrumbs
        firstPathName="コミュニティ"
        firstPathLink="/community"
        secondPathName={commData?.name}
        secondPathLink={commData && `/community/${commData.url}`}
      />
      <Tile>
        {/* <Thumbnail
          commData={commData}
        /> */}
        <BlankSpace height="60px"/>
        {/* <TopArea commData={commData}/> */}
        <Hr margin="60px"/>
        {/* <Information commData={commData}/> */}
        <Hr margin="60px"/>
        {/* <MgComment/> */}
        {/* <Hr margin="60px"/> */}
        {/* <Interview/> */}
        <Hr margin="60px"/>
        {/* <Question/> */}
        <Hr margin="60px"/>
        {/* <Message/> */}
      </Tile>
      

      <DotsLoader loading={loading}/>
    </Wrapper>
  )
}

const Wrapper =  styled.div`
  position: relative;
`