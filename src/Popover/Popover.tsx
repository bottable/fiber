import { StyledPopover } from './styles'

import React, { FC } from 'react'

export type PopoverProps = {
  // custom props here
}

const Popover: FC<PopoverProps> = ({ children, ...props }) => {
  return <StyledPopover {...props}>{children}</StyledPopover>
}

export { Popover }
