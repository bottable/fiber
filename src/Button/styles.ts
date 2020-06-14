import { css } from 'styled-components'
import { rem } from 'polished'

export const baseStyle = css`
  margin: ${rem('8px')};
  outline: none;
  ${(p) => p.theme.transition};
  cursor: pointer;
`
