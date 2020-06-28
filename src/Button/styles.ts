import { css } from 'styled-components'
import { rem } from 'polished'

export const baseStyle = css`
  display: inline-flex;
  justify-content: center;
  margin-right: ${rem('8px')};
  margin-bottom: ${rem('12px')};
  border-width: ${rem('1px')};
  outline: none;
  ${(p) => p.theme.transition};
`
