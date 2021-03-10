import { MergeElementProps } from '../utils'
import { useCollapse } from '../hooks'

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

export type PanelProps = MergeElementProps<
  'div',
  {
    header?: string | React.ReactNode
    collapsed?: boolean
    height?: number
    panelKey?: string
    onChange?: (key: string) => void
    extra?: React.ReactNode
    headerStyle?: React.CSSProperties & object
  }
>

const Panel: FC<PanelProps> = ({
  children,
  collapsed,
  header,
  panelKey,
  onChange,
  extra,
  headerStyle,
  ...props
}) => {
  const { childrenNode: panelContentContainerNode } = useCollapse({
    children: <PanelContentContainer>{children}</PanelContentContainer>,
    collapsed: collapsed
  })

  return (
    <StyledPanel {...props}>
      <PanelHeaderContainer style={headerStyle}>
        <HeaderContainer>{header}</HeaderContainer>
        <ExpandIconSpan
          collapsed={collapsed}
          onClick={() => {
            onChange!(panelKey!)
          }}
        >
          <MdExpandMore />
        </ExpandIconSpan>
        <ExtraIconSpan>{extra}</ExtraIconSpan>
      </PanelHeaderContainer>
      {panelContentContainerNode}
    </StyledPanel>
  )
}

export { Panel }
