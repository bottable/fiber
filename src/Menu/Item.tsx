import { StyledItem } from './styles'
import { MenuProps } from './Menu'

import React, { FC } from 'react'

export interface ItemProps extends MenuProps {
  danger?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
  collapse?: () => void
  disabled?: boolean
}

const Item: FC<ItemProps> = ({
  children,
  onClick,
  collapse,
  disabled,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (disabled) return
    if (onClick) onClick(e)
    if (collapse) collapse()
  }

  return (
    <StyledItem {...props} onClick={handleClick} disabled={disabled}>
      {children}
    </StyledItem>
  )
}

export default Item
