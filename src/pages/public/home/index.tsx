import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { AppLayout } from 'components/layouts/app'
import { Card, LoadingCart } from 'components/ui-kit/card'
import { Empty, Row, Col } from 'antd'
import * as Lib from './lib'

export const HomePage: FC = () => {
  Lib.H.useHomePage()
  const { guys } = useSelector((root: RootState) => root.guysReducer)

  return (
    <AppLayout title="Home Page">
      <Col span={20} offset={2}>
        <Row>
          {guys.loading &&
            [...Array(8)].map((_el, i) => (
              <Lib.C.Column key={i}>
                <LoadingCart />
              </Lib.C.Column>
            ))}
          {!guys.loading &&
            guys.response &&
            guys.response.length > 0 &&
            guys.response.map(guy => (
              <Lib.C.Column key={guy.id}>
                <Card
                  name={guy.name}
                  username={guy.username}
                  email={guy.email}
                  avatar={process.env.REACT_APP_DICEBEAE_AVATARS + `/avataaars/${guy.username}.svg`}
                  phone={guy.phone}
                  website={guy.website}
                  address={guy.address.city}
                  company={guy.company.name}
                  location={{ lat: guy.address.geo.lat, lng: guy.address.geo.lng }}
                />
              </Lib.C.Column>
            ))}
          {!guys.loading && !guys.response && (
            <Lib.S.EmptyContainer>
              <Empty />
            </Lib.S.EmptyContainer>
          )}
        </Row>
      </Col>
    </AppLayout>
  )
}
