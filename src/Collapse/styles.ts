import { PanelProps } from './Panel'

import styled from 'styled-components'

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

export const PanelHeaderContainer = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.paddings.md};
  transition: all 0.3s;
  cursor: pointer;

  svg {
    float: right;
  }
`

export const ExtraIconSpan = styled.span`
  svg {
    margin-left: ${({ theme }) => theme.margins.xs};
  }
`

export const ExpandIconSpan = styled.span<PanelProps>`
  svg {
    transform: ${({ collapsed }) => (collapsed ? 'rotate(-90deg)' : 0)};
    ${({ theme }) => theme.transition}
  }
`

export const PanelCollapseContainer = styled.div<PanelProps>`
  max-height: ${({ collapsed, height }) => {
    if (height === undefined) return null
    if (collapsed) return 0
    else return `${height}px`
  }};
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
