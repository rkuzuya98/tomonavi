import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

html {
  height: 100%;
  background: rgba(0,0,0,0);
  background: aliceblue;
  font-family: 'Noto Sans JP', sans-serif;
  font-family: sans-serif;
}

button, input, select, textarea {
font-family : inherit;
font-size : 100%;
}

* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  color: rgba(0,0,0,0.8);
}

h1 {
  /* margin-bottom: 30px; */
  font-weight: bold;
  font-size: 24px;
}
h2 {
  font-size: 18px;
  /* font-weight: normal; */

}

h3 {
  font-weight: normal;
}

p {
  font-size: 16px;
}

i {
}

span {

}


button {
  cursor: pointer;
  font-weight: bold;
  &:focus {
    outline: none;
  }
}
`


export default GlobalStyle
