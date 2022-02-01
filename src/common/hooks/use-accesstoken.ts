import { useDispatch, useSelector } from 'react-redux'
import { Guy } from 'common/models/guy'

export type UseAccessToken = {
  session: Guy | null
  hasPermission: boolean
}

export const initialValues: UseAccessToken = {
  session: null,
  hasPermission: false,
}

export const useAccessToken = (): UseAccessToken => {
  return {
    session: null,
    hasPermission: false,
  }
}
