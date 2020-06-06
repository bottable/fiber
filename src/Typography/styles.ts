import { css } from 'styled-components'
import { compose, space, color, typography } from 'styled-system'
import { rem } from 'polished'

export const headingComposition = compose(space, color, typography)

export const headingStyle = css`
  margin-top: ${rem('10px')};
  margin-bottom: ${rem('10px')};
  color: #202020;
  font-weight: 600;
`
