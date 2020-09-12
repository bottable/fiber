import {
  StyledPanel,
  PanelHeaderContainer,
  PanelCollapseContainer,
  PanelContentContainer
} from './styles'

import React, { FC, useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export type PanelProps = {
  header?: string
}

const Panel: FC<PanelProps> = ({ children, header }) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)

  return (
    <StyledPanel>
      <PanelHeaderContainer
        onClick={() => setCollapsed((prevCollapsed) => !prevCollapsed)}
        collapsed={collapsed}
      >
        {header}
        <ExpandMoreIcon />
      </PanelHeaderContainer>
      <PanelCollapseContainer collapsed={collapsed}>
        <PanelContentContainer>{children}</PanelContentContainer>
      </PanelCollapseContainer>
    </StyledPanel>
  )
}

export { Panel }
