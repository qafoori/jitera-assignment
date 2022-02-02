import styled from 'styled-components'
import { Typography } from 'antd'

export const AppLayoutContainer = styled.div`
  width: 100%;

  .logo {
    max-width: 100%;
    width: 100%;
    padding: 4px 20px;
  }

  .layoutContainer {
    display: flex;
    min-height: 100vh;
    max-height: 100vh;

    > .headerContainer {
      padding: 0 24px;

      .collapseButton {
        border: none;
      }
    }

    > .childrenContainer {
      flex: 1;
      padding: 24px;
      overflow: auto;
    }
  }
`
export const PageTitle = styled(Typography.Title)`
  font-size: 15pt !important;
  display: inline-block;
  margin: 0 0 0 15px;
  color: white !important;
`
