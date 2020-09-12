// import { CollapseProps } from './Collapse'

import styled from 'styled-components'

export type CollapseStyleProps = {
  collapsed?: boolean
}

export const StyledCollapse = styled.div`
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  ${({ theme }) => theme.boxShadow};
`

export const StyledPanel = styled.div`
  &:first-child {
    border-top-left-radius: ${({ theme }) => theme.radii.md};
    border-top-right-radius: ${({ theme }) => theme.radii.md};
  }

  &:last-child {
    border-bottom-right-radius: ${({ theme }) => theme.radii.md};
    border-bottom-left-radius: ${({ theme }) => theme.radii.md};
  }

  &:not(:last-child) {
    border-bottom: ${({ theme }) => theme.border.md};
    border-bottom-color: ${({ theme }) => theme.colors.gray4};
  }
`

export const PanelHeaderContainer = styled.div<CollapseStyleProps>`
  position: relative;
  padding: ${({ theme }) => theme.paddings.md};
  transition: all 0.3s;
  cursor: pointer;

  svg {
    float: right;
    transform: ${({ collapsed }) => (collapsed ? 'rotate(-90deg)' : 0)};
    ${({ theme }) => theme.transition}
  }
`

export const PanelCollapseContainer = styled.div<CollapseStyleProps>`
  max-height: ${({ collapsed }) => (collapsed ? 0 : 'initial')};
  overflow: hidden;
  ${({ theme }) => theme.transition}
`

export const PanelContentContainer = styled.div`
  padding: ${({ theme }) => theme.paddings.md};
  padding-top: 0;
  p {
    margin: 0;
  }
`
