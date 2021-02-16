import { MergeElementProps } from '../utils'

import { StyledSider, SiderChildren } from './styles'

import React, { FC } from 'react'

export type SiderProps = MergeElementProps<
  'div',
  {
    style?: React.CSSProperties & object
  }
>

const Sider: FC<SiderProps> = ({ children, ...props }) => {
  return (
    <StyledSider {...props}>
      <SiderChildren>{children}</SiderChildren>
    </StyledSider>
  )
}

export { Sider }
