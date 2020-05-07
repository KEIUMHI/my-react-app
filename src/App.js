import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Header from './common/header'
import routes from './routers'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          {renderRoutes(routes)}
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
