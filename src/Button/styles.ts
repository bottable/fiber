import { css } from 'styled-components'
import { rem } from 'polished'

export const baseStyle = css`
  margin-right: ${rem('8px')};
  margin-bottom: ${rem('12px')};
  border-width: ${rem('1px')};
  outline: none;
  ${(p) => p.theme.transition};
`
