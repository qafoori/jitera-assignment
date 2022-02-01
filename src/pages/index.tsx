import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RouteSwitcher } from 'routes'
import { GlobalStyle } from 'common/styles/global.styles'
import 'common/styles/global.styles.css'
import 'common/styles/global.styles.less'

export const App: React.FC = (): JSX.Element => {
  return (
    <Suspense fallback={'loading...'}>
      <BrowserRouter>
        <GlobalStyle />
        <RouteSwitcher />
      </BrowserRouter>
    </Suspense>
  )
}
