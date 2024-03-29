import { MergeElementProps } from '../utils'

import { StyledItem } from './styles'

import React, { FC } from 'react'

export type ItemProps = MergeElementProps<
  'li',
  {
    danger?: boolean
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
    collapse?: () => void
    disabled?: boolean
    inline?: boolean
    style?: React.CSSProperties & object
  }
>

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
