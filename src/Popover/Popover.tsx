import { StyledPopover } from './styles'

import React, { FC } from 'react'

export type PopoverProps = {
  content?: string
  title?: string
}

const Popover: FC<PopoverProps> = ({ children, content, title, ...props }) => {
  return (
    <span {...props}>
      {children}
      <StyledPopover>
        {title}
        {content}
      </StyledPopover>
    </span>
  )
}

export { Popover }
