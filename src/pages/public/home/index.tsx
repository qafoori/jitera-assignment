import { FC, useEffect } from 'react'
import { guysActions } from 'store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { AppLayout } from 'components/layouts/app'

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

  return (
    <AppLayout title="Home Page">
      <p>home page</p>
    </AppLayout>
  )
}
