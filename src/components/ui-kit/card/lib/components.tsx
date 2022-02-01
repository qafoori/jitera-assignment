import * as Lib from '.'
import { FC, Fragment } from 'react'
import { Typography } from 'antd'

const { Link, Paragraph } = Typography

export const Info: FC<Lib.T.InfoProps> = ({ icon, value }) => {
  return (
    <li>
      <span>{icon}</span>
      <p>{value}</p>
    </li>
  )
}

export const AboutMe: FC<Lib.T.AboutMeProps> = ({ name, username, company, address, email, website, location, phone }) => {
  const { lng, lat } = location
  const googleEmbed = 'https://www.google.com/maps/embed/v1/search'
  const googleApi = process.env.REACT_APP_GOOGLE_MAP_API

  return (
    <Fragment>
      <Lib.S.Name>About me:</Lib.S.Name>
      <Paragraph>
        My name is <u>{name}</u> and i preferred to choose <u>{username}</u> as my username! I'm working at <u>{company}</u> at moment. If
        you'd like to meat me, then come here:
      </Paragraph>
      <Paragraph>{address}</Paragraph>
      But if you are a lazy guy like me, then call me via <Link href={`tel:${phone}`}>{phone}</Link> or send me a mail via{' '}
      <Link href={`mailto:${email}`}>{email}</Link> .You may also wanna learn more about me. So open up{' '}
      <Link href={website} target="_blank">
        my website
      </Link>{' '}
      <Paragraph />
      <Lib.S.Name>Location:</Lib.S.Name>
      <Lib.S.Map width="100%" height="200" src={`${googleEmbed}?key=${googleApi}&q=${lat},${lng}&zoom=18`} />
    </Fragment>
  )
}
