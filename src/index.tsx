import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './pages'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={1 as any}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('jitera'),
)

reportWebVitals()
