import React, { useState } from 'react'
import styled from "styled-components"
import { ThemeListProps } from '../../data/theme'
import { SelectGroup } from './SelectGroup'
import { SelectOne } from './SelectOne'
import { NarrowTop } from './NarrowTop'
import { BlankSpace } from '../UIKit/BlankSpace'

type NarrowContentProps = ({
  handleWindow: VoidFunction
  hdCurrent: (item: string | null) => void
  current: string | null
  selectItems: ThemeListProps
})

export const NarrowContent: React.FC<NarrowContentProps> = ({
  handleWindow,
  hdCurrent,
  current,
  selectItems
}) => {

  // 選択中の項目（絞り込み検索ページには未反映）
  const [selectingItem, setSelectingItem] = useState(current)
  const handleSelectingItem: (item: string | null) => void = (item) => setSelectingItem(item)

  // 選択中のグループ（障害、ジェンダー、関東、近畿など）
  // null状態でグループ選択画面になる
  const [nowGroup, setNowGroup] = useState<string | null>(null)
  const hdNowGroup: (g: string | null) => void = (g) => setNowGroup(g)
  
  return (
    <Wrapper>
      <BlankSpace height="10px"/>
      <NarrowTop
        handleWindow={handleWindow}
        nowGroup={nowGroup}
        hdNowGroup={hdNowGroup}
      />
      <BlankSpace height="30px"/>
      <SelectGroup
        hdCurrent={hdCurrent}
        current={current}
        selectingItem={selectingItem}
        handleSelectingItem={handleSelectingItem}
        selectItems={selectItems}
        nowGroup={nowGroup}
        hdNowGroup={hdNowGroup}
      />
      <SelectOne
        nowGroup={nowGroup}
        hdNowGroup={hdNowGroup}
        selectItems={selectItems}
        hdCurrent={hdCurrent}
        handleWindow={handleWindow}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
`