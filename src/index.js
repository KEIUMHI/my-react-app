import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GlobalStyle } from './style'
import { IconFontStyle } from './static/iconfont/iconfont'
ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <IconFontStyle />
    <App />
  </Fragment>,
  document.getElementById('root')
)
