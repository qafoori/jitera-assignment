import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { guysActions } from 'store/actions'

export const useHomePage = () => {
  const dispatch = useDispatch()

  const getGuys = () => {
    dispatch(guysActions.getGuysRequest())
  }

  useEffect(getGuys, [])
}
