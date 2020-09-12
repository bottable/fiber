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
}

const Panel: FC<PanelProps> = ({ children, header }) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
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
        onClick={() => setCollapsed((prevCollapsed) => !prevCollapsed)}
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
