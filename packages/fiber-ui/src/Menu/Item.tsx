import { StyledItem } from './styles'

import React, { FC } from 'react'

export type ItemProps = {
  danger?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  collapse?: () => void
  disabled?: boolean
  inline?: boolean
}

const Item: FC<ItemProps> = ({
  children,
  onClick,
  collapse,
  disabled,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
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
