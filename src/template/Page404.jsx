/* eslint-disable no-use-before-define */
import React from 'react'
import { Breadcrumbs } from '../component/breadcrumbs/Breadcrumbs'
import { Page404content } from '../component/page404/Page404content'
import { Tile } from '../component/UIKit/TileJ'

export const Page404 = () =>
  <div>
    {/* パンくずリスト */}
    <Breadcrumbs
        firstPathName="404"
      />
      {/* ページ上部 */}
      <Tile>
        <Page404content/>
      </Tile>
  </div>
