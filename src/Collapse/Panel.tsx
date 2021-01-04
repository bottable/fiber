import { useControl, useCollapse } from '../hooks'

import {
  StyledPanel,
  PanelHeaderContainer,
  PanelContentContainer,
  HeaderContainer,
  ExpandIconSpan,
  ExtraIconSpan
} from './styles'

import React, { FC } from 'react'
import { MdExpandMore } from 'react-icons/md'

export type PanelProps = {
  header?: string | React.ReactNode
  collapsed?: boolean
  height?: number
  panelKey?: string
  onChange?: (key: string) => void
  extra?: React.ReactNode
}

const Panel: FC<PanelProps> = ({
  children,
  collapsed: collapsedProps,
  header,
  panelKey,
  onChange,
  extra
}) => {
  const { value: collapsed, setValue: setCollapsed } = useControl({
    value: collapsedProps,
    defaultValue: false,
    onChange: onChange as (newValue: unknown) => unknown
  }) as { value: boolean; setValue: (newValue: string) => void }

  const { childrenNode: panelContentContainerNode } = useCollapse({
    children: <PanelContentContainer>{children}</PanelContentContainer>,
    collapsed: collapsed
  })

  return (
    <StyledPanel>
      <PanelHeaderContainer onClick={() => setCollapsed(panelKey!)}>
        <HeaderContainer>{header}</HeaderContainer>
        <ExpandIconSpan collapsed={collapsed}>
          <MdExpandMore />
        </ExpandIconSpan>
        <ExtraIconSpan>{extra}</ExtraIconSpan>
      </PanelHeaderContainer>
      {panelContentContainerNode}
    </StyledPanel>
  )
}

export { Panel }
