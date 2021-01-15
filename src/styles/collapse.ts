import styled from 'styled-components'

export type CollapseProps = {
  height?: number
  collapsed?: boolean
  expanded?: boolean
}

export const CollapseContainer = styled.div<CollapseProps>`
  max-height: ${({ collapsed, expanded, height }) => {
    if (height === undefined || (expanded && !collapsed)) return null
    if ((expanded && collapsed) || !collapsed) return `${height}px`
    return 0
  }};
  overflow: ${({ expanded }) => (expanded ? 'visible' : 'hidden')};
  transition: all 300ms ease;
`
