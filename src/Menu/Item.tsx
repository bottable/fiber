import { StyledItem } from './styles'
import { MenuProps } from './Menu'

import React, { FC } from 'react'

export interface ItemProps extends MenuProps {
  danger?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
  collapse?: () => void
}

const Item: FC<ItemProps> = ({ children, onClick, collapse, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (onClick) onClick(e)
    if (collapse) collapse()
  }

  return (
    <StyledItem {...props} onClick={handleClick}>
      {children}
    </StyledItem>
  )
}

export default Item
