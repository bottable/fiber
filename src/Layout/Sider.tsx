import { StyledSider } from './styles'

import React, { FC } from 'react'

export type SiderProps = {
  // custom props here
}

const Sider: FC<SiderProps> = ({ children, ...props }) => {
  return <StyledSider {...props}>{children}</StyledSider>
}

export { Sider }
