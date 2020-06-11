import { css } from 'styled-components'
import { rem } from 'polished'

export const baseStyle = css`
  margin: ${rem('8px')};
  padding: ${rem('10px')} ${rem('16px')};
  border-radius: ${rem('4px')};
  outline: none;
  font-size: ${rem('14px')};
  ${(p) => p.theme.transition};
  cursor: pointer;
`
