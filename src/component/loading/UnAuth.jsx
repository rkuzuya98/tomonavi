// import React, { useContext, useEffect, useState } from 'react'
// import styled, { css } from 'styled-components'
// import { AlreadySigning } from './AlreadySigning'
// import { Signing } from './App'
// import DotsLoader from './component/loading/DotsLoader'

// export const UnAuth = ({
//   children
// }) => {

//   // サインイン状態を識別
//   const [signing] = useContext(Signing)
//   // 認証状態を識別
//   const [unauth, setUnAuth] = useState(null)

//   useEffect(() => {
//       if (!(signing === null)) {
//         if (signing === true) {
//           setUnAuth(true)
//         } else {
//           setUnAuth(false)
//         }
//       }
//   },[signing])

//   return (
//     <div>
//       <DotsLoader
//         loading={
//           signing === null
//         }
//       />  
//       {/* サインインしている場合 */}
//       <AlreadySigning
//         display={
//           !(signing === null) &&
//           signing === true
//         }
//       />
//       {/* サインインしていない場合 */}
//       <Children
//         display={
//           !(signing === null) &&
//           signing === false
//           // signing === false &&
//           // !(unauth === null) &&
//           // unauth
//         }
//       >
//         {children}
//       </Children>
//     </div>
//   )
// }

// const Children = styled.div`
//   transition: all 0.3s ease;
//   ${({ display }) => display || css`
//     opacity: 0;
//   `}
// `

/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import styled, { css } from 'styled-components'

export const UnAuth = ({
  display
}) => {
  const a = "A"
  return (
    <Wrapper display={display}>
      <h1>you are not signned in!!</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  transition: all 0.3s ease;
  ${({ display }) => display || css`
    opacity: 0;
    pointer-events: none;
    height: 0;
  `}
`