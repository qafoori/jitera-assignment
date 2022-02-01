import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './pages'
import { Provider } from 'react-redux'
import { store } from './store'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('jitera'),
)

reportWebVitals()
