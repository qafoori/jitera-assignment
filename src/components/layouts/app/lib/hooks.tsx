import { useState } from 'react'
import * as Lib from '.'
import * as Icons from '@ant-design/icons'

export const useAppLayout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const toggleMenu = () => setCollapsed(prevValue => !prevValue)

  const menuItems: Lib.T.ListItem[] = [
    {
      icon: <Icons.DashboardFilled />,
      linkTo: '/',
      title: 'Home page',
    },
    {
      icon: <Icons.SettingOutlined />,
      linkTo: '/',
      title: 'Settings',
    },
    {
      icon: <Icons.LogoutOutlined />,
      linkTo: '/',
      title: 'Logout',
    },
  ]

  return {
    get: {
      collapsed,
      menuItems,
    },
    on: {
      toggleMenu,
    },
  }
}
