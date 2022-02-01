import styled from 'styled-components'
import { Typography, Skeleton } from 'antd'

const { Title } = Typography

export const CardContainer = styled.div``

export const Name = styled(Title)`
  font-size: 14pt !important;
`
export const InfoContainer = styled.ul`
  list-style: none;
  width: 100%;
  display: block;
  padding: 0;
  margin: 0;

  > li {
    display: flex;
    align-items: center;
    color: gray;

    > span {
      font-size: 15pt;
    }

    > p {
      margin: 0;
      padding: 0 0 0 7px;
      font-size: 12pt;
      flex: 1;
    }
  }
`

export const Map = styled.iframe`
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 8px 0 #e3dcdc;
`

export const ImageSkeleton = styled(Skeleton.Image)`
  width: 100% !important;
  height: 241px !important;
`

export const InfoSkeleton = styled(Skeleton)`
  h3 {
    margin: 4px 0 -5px 0 !important;
  }

  ul > li:last-child {
    margin: 18px 0 -8px 0 !important;
  }
`

export const ActionSkeleton = styled(Skeleton.Avatar)`
  > span {
    height: 20px !important;
    width: 20px !important;
  }
`