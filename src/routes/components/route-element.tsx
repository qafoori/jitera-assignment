import { FC } from 'react'
import { RouteElementProps } from '../types/route-elements.type'
import { Helmet } from 'react-helmet'

export const RouteElement: FC<RouteElementProps> = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title} | React Coding Assignment - Jitera</title>
      </Helmet>

      {children && children}
    </>
  )
}
