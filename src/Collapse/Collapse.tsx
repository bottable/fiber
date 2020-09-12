import { StyledCollapse } from './styles'

import React, { FC } from 'react'

export type CollapseProps = {
  // custom props here
}

const Collapse: FC<CollapseProps> = ({ children, ...props }) => {
  return <StyledCollapse {...props}>{children}</StyledCollapse>
}

export { Collapse }
