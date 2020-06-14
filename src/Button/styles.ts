import { css } from 'styled-components'
import { rem } from 'polished'

export const baseStyle = css`
  margin: ${rem('8px')};
  border-width: ${rem('1px')};
  outline: none;
  ${(p) => p.theme.transition};
`
