import { useControl, useCollapse } from '../hooks'

import {
  StyledPanel,
  PanelHeaderContainer,
  PanelContentContainer,
  ExpandIconSpan,
  ExtraIconSpan
} from './styles'

import React, { FC } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export type PanelProps = {
  header?: string
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
        {header}
        <ExtraIconSpan>{extra}</ExtraIconSpan>
        <ExpandIconSpan collapsed={collapsed}>
          <ExpandMoreIcon />
        </ExpandIconSpan>
      </PanelHeaderContainer>
      {panelContentContainerNode}
    </StyledPanel>
  )
}

export { Panel }
