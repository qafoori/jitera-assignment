import { FC, useEffect } from 'react'
import { guysActions } from 'store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { AppLayout } from 'components/layouts/app'
import { Card, LoadingCart } from 'components/ui-kit/card'
import { Col, Row } from 'antd'

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
      <Row>
        {/* <Col xxl={4}>
          <Card
            name="Leanne Graham"
            username="Bret"
            email="Sincere@april.biz"
            avatar={process.env.REACT_APP_DICEBEAE_AVATARS + '/avataaars/Bret.svg'}
            phone="56565656"
            website="asdasdasd"
            address="asdasd"
            company="asdasd"
            location={{ lat: '', lng: '' }}
          />
        </Col> */}

        {[...Array(8)].map((_el, i) => (
          <Col xxl={4} key={i}>
            <LoadingCart />
          </Col>
        ))}
      </Row>
    </AppLayout>
  )
}
