import { StyledCollapse } from './styles'
import { Panel, PanelProps } from './Panel'

import React, { FC } from 'react'

export type CollapseProps = {
  // custom props here
}

type CollapseFC<P> = FC<P> & {
  Panel: React.FC<PanelProps>
}

const Collapse: CollapseFC<CollapseProps> = ({ children, ...props }) => {
  return <StyledCollapse {...props}>{children}</StyledCollapse>
}

Collapse.Panel = Panel

export { Collapse }
