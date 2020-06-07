import { css } from 'styled-components'
import { compose, space, color, typography } from 'styled-system'

export const headingComposition = compose(space, color, typography)

export const headingStyle = css`
  color: #202020;
`
