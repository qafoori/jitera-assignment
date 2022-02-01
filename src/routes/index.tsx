import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAccessToken } from 'common/hooks/use-accesstoken'
import { routes } from './routes'
import { RouteElement } from './components/route-element'

export const RouteSwitcher: React.FC = (): JSX.Element => {
  const { hasPermission } = useAccessToken()

  return (
    <Routes>
      {hasPermission
        ? Object.keys(routes.private).map((key, index) => {
            const { return: page, get: route, title } = routes.private[key]
            return <Route path={route} key={index} element={<RouteElement title={title}>{page}</RouteElement>} />
          })
        : Object.keys(routes.public).map((key, index) => {
            const { return: page, get: route, title } = routes.public[key]
            return <Route path={route} key={index} element={<RouteElement title={title}>{page}</RouteElement>} />
          })}
    </Routes>
  )
}
