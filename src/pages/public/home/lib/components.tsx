import { FC } from 'react'
import * as Lib from '.'

export const Column: FC = ({ children }) => {
  return (
    <Lib.S.ColumnContainer xxl={6} xl={8} lg={8} md={12} sm={24} xs={24}>
      {children}
    </Lib.S.ColumnContainer>
  )
}
