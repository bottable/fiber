import { StyledSider, SiderChildren } from './styles'

import React, { FC } from 'react'

export type SiderProps = {
  // custom props here
}

const Sider: FC<SiderProps> = ({ children, ...props }) => {
  return (
    <StyledSider {...props}>
      <SiderChildren>{children}</SiderChildren>
    </StyledSider>
  )
}

export { Sider }