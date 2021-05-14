/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import styled from 'styled-components'
import { CommCard } from './CommCard'

type CommCardsProps = ({
  comms: any
  handleModal: VoidFunction
})

export const CommCards: React.FC<CommCardsProps> = ({
  comms,
  handleModal
}) => {
  const a = "A"
  return (
    <Wrapper>
      <ul>
        {
          comms.map((comm: any) => {
            const b = "A"
            // const updatedDate = comm?.updated_at?.toDate()
            // const year = updatedDate?.getFullYear()
            // const month = updatedDate?.getMonth() + 1
            // const editedMonth = String(month).length === 1 ? `0${month}` : month
            // const date = updatedDate?.getDate()
            // const editedDate = String(Date).length === 1 ? `0${date}` : date
            // const update = `${year}.${editedMonth}.${editedDate}`
            return (
              <li
              key={comm?.name}
              style={{
                width: "100%",
                maxWidth: "700px",
                margin: "0 auto"
              }}>
                <CommCard
                  // update={update}
                  comm={comm}
                  handleModal={handleModal}
                />
              </li>
            )
          }
          )
        }
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`