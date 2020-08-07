import { StyledMenuItem } from './styles'
import { MenuProps } from './Menu'

import React, { FC } from 'react'

export interface MenuItemProps extends MenuProps {
  danger?: boolean
}

const MenuItem: FC<MenuItemProps> = ({ children, ...props }) => {
  return <StyledMenuItem {...props}>{children}</StyledMenuItem>
}

export { MenuItem }
