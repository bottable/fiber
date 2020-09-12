import { useControl } from '../hooks'

import {
  StyledPanel,
  PanelHeaderContainer,
  PanelCollapseContainer,
  PanelContentContainer
} from './styles'

import React, { FC, useState, useRef, useEffect } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export type PanelProps = {
  header?: string
  collapsed?: boolean
  height?: number
  panelKey?: string
  onChange?: (key: string) => void
}

const Panel: FC<PanelProps> = ({
  children,
  collapsed: collapsedProps,
  header,
  panelKey,
  onChange
}) => {
  const { value: collapsed, setValue: setCollapsed } = useControl({
    value: collapsedProps,
    defaultValue: false,
    onChange: onChange as (newValue: unknown) => unknown
  }) as { value: boolean; setValue: (newValue: string) => void }

  const [height, setHeight] = useState<number | undefined>(undefined)

  const collapseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (collapseRef.current && height === undefined) {
      setHeight(collapseRef.current.offsetHeight)
    }
  }, [collapseRef])

  return (
    <StyledPanel>
      <PanelHeaderContainer
        onClick={() => setCollapsed(panelKey!)}
        collapsed={collapsed}
      >
        {header}
        <ExpandMoreIcon />
      </PanelHeaderContainer>
      <PanelCollapseContainer
        collapsed={collapsed}
        height={height}
        ref={collapseRef}
      >
        <PanelContentContainer>{children}</PanelContentContainer>
      </PanelCollapseContainer>
    </StyledPanel>
  )
}

export { Panel }
