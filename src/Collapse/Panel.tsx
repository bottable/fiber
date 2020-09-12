import { useControl } from '../hooks'

import {
  StyledPanel,
  PanelHeaderContainer,
  PanelCollapseContainer,
  PanelContentContainer,
  ExpandIconSpan,
  ExtraIconSpan
} from './styles'

import React, { FC, useState, useRef, useEffect } from 'react'
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

  const [height, setHeight] = useState<number | undefined>(undefined)

  const collapseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (collapseRef.current && height === undefined) {
      setHeight(collapseRef.current.offsetHeight)
    }
  }, [collapseRef])

  return (
    <StyledPanel>
      <PanelHeaderContainer onClick={() => setCollapsed(panelKey!)}>
        {header}
        <ExtraIconSpan>{extra}</ExtraIconSpan>
        <ExpandIconSpan collapsed={collapsed}>
          <ExpandMoreIcon />
        </ExpandIconSpan>
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
