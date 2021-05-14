import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { Header } from './component/header/Header'
import { BlankSpace } from './component/UIKit/BlankSpace'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Router } from './Router'
import GlobalStyle from './theme/globalStyles'
import { theme } from './theme/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
