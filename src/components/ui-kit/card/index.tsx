import { FC, Fragment, useState } from 'react'
import * as Lib from './lib'
import { Card as AndCard, Typography, Popover, Popconfirm, Modal } from 'antd'
import * as Icons from '@ant-design/icons'

export const Card: FC<Lib.T.CardProps> = props => {
  const { avatar, name, phone, website, email, isLiked } = props
  const [liked, setLiked] = useState<boolean>(isLiked || false)
  const toggleLike = () => setLiked(prev => !prev)
  const [modal, setModal] = useState<boolean>(false)

  const cardActions = [
    <Popover content={`Call ${name}`} title={null}>
      <Typography.Link tabIndex={1} href={`tel:${phone}`}>
        <Icons.PhoneFilled />
      </Typography.Link>
    </Popover>,

    <Popover content={`Give a high-five to ${name}`} title={null}>
      <Icons.HeartFilled tabIndex={2} style={{ color: liked ? '#2dcea2' : 'gray' }} onClick={toggleLike} />
    </Popover>,

    <Popover content={`More about ${name}`} title={null}>
      <Popconfirm
        placement="topRight"
        title={`ridiculous question! Sure?`}
        okText="Yup"
        cancelText="Forget it"
        onConfirm={() => setModal(true)}
      >
        <Icons.EllipsisOutlined tabIndex={3} />
      </Popconfirm>
    </Popover>,
  ]

  return (
    <Fragment>
      <Modal visible={modal} footer={null} title={name} onCancel={() => setModal(false)}>
        <Lib.C.AboutMe {...props} />
      </Modal>

      <AndCard cover={<img alt={name} src={avatar} />} actions={cardActions}>
        <Lib.S.Name>{name}</Lib.S.Name>

        <Lib.S.InfoContainer>
          <Lib.C.Info icon={<Icons.MailOutlined />} value={email} />
          <Lib.C.Info icon={<Icons.PhoneOutlined />} value={phone} />
          <Lib.C.Info icon={<Icons.GlobalOutlined />} value={website} />
        </Lib.S.InfoContainer>
      </AndCard>
    </Fragment>
  )
}

export const LoadingCart: FC = () => {
  const action = <Lib.S.ActionSkeleton active />
  const cardActions = [action, action, action]

  return (
    <AndCard cover={<Lib.S.ImageSkeleton />} actions={cardActions}>
      <Lib.S.InfoSkeleton active />
      <Lib.S.InfoContainer></Lib.S.InfoContainer>
    </AndCard>
  )
}
