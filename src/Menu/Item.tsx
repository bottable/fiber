import { StyledItem } from './styles'
import { MenuProps } from './Menu'

import React, { FC } from 'react'

export interface ItemProps extends MenuProps {
  danger?: boolean
}

const Item: FC<ItemProps> = ({ children, ...props }) => {
  return <StyledItem {...props}>{children}</StyledItem>
}

export default Item
