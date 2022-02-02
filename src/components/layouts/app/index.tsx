import { FC } from 'react'
import * as Lib from './lib'
import { Layout, Menu, Button } from 'antd'
import * as Icons from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { Header, Sider, Content } = Layout
const { Item } = Menu

export const AppLayout: FC<Lib.T.AppLayoutProps> = ({ children, title }) => {
  const { get, on } = Lib.H.useAppLayout()

  return (
    <Lib.S.AppLayoutContainer>
      <Layout>
        <Sider trigger={null} collapsible collapsed={get.collapsed} id="sidebar" className={get.collapsed ? 'close' : ''}>
          <Link to="/">
            <img src={get.collapsed ? '/single-logo.png' : '/typography-logo.png'} alt="Jitera" className="logo" />
          </Link>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            {get.menuItems.map(({ title, linkTo, icon }, index) => (
              <Item key={index} icon={icon}>
                <Link to={linkTo}>{title}</Link>
              </Item>
            ))}
          </Menu>
        </Sider>

        <Layout className="layoutContainer">
          <Header className="headerContainer">
            <Button
              icon={get.collapsed ? <Icons.MenuUnfoldOutlined /> : <Icons.MenuFoldOutlined />}
              shape="circle"
              onClick={on.toggleMenu}
              ghost
              size="large"
              className="collapseButton"
              id="collapseButton"
            />

            <Lib.S.PageTitle>{title}</Lib.S.PageTitle>
          </Header>

          <Content className="childrenContainer">{children}</Content>
        </Layout>
      </Layout>
    </Lib.S.AppLayoutContainer>
  )
}
