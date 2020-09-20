import styled from 'styled-components'

export type CollapseProps = {
  height?: number
  collapsed?: boolean
  expanded?: boolean
}

export const CollapseContainer = styled.div<CollapseProps>`
  max-height: ${({ collapsed, expanded, height }) => {
    if (height === undefined || expanded) return null
    if (collapsed) return 0
    else return `${height}px`
  }};
  overflow: ${({ expanded }) => (expanded ? 'visible' : 'hidden')};
  ${({ theme }) => theme.transition}
`
