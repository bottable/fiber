import { DropdownProps } from '../hooks'

import { css } from 'styled-components'
import { rem } from 'polished'

export const dropdown = css<DropdownProps>`
  position: absolute;
  z-index: 999;
  min-width: ${rem('160px')};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.md};
  border-top-left-radius: ${({ topped }) => (topped ? 0 : null)};
  border-top-right-radius: ${({ topped }) => (topped ? 0 : null)};
  background-color: #fff;
  ${({ theme }) => theme.boxShadow}
`
