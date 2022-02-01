import { FC, useEffect } from 'react'
import { guysActions } from 'store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'

export const HomePage: FC = () => {
  const dispatch = useDispatch()
  const { guys } = useSelector((root: RootState) => root.guysReducer)

  useEffect(() => {
    dispatch(guysActions.getGuysRequest())
  }, [])

  useEffect(() => {
    if (guys) {
      console.log(guys)
    }
  }, [guys])

  return <p>home page</p>
}
