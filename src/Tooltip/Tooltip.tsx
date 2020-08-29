import { StyledTooltip } from './styles'

import React, { FC } from 'react'

export type TooltipProps = {
  // custom props here
}

const Tooltip: FC<TooltipProps> = ({ children, ...props }) => {
  return <StyledTooltip {...props}>{children}</StyledTooltip>
}

export { Tooltip }
