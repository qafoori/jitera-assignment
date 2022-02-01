import { routes } from '../routes'

export const getPaths = (type: 'public' | 'private') => {
  const paths: string[] = []
  Object.keys(routes[type]).forEach(key => {
    const { get: route } = routes[type][key]
    paths.push(route)
  })
  return paths
}
