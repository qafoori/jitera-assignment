import { RoutesObject } from '../types/routes.object.type'
import { HomePage } from 'pages/public/home'

/**
 * public
 */
export const publicRoutes: RoutesObject = {
  home: {
    get: '/',
    return: <HomePage />,
    title: 'React Coding Assignment - Jitera',
  },
}
