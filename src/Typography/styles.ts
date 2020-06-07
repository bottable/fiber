import { css } from 'styled-components'
import {
  compose,
  space,
  color,
  typography,
  height,
  SpaceProps,
  ColorProps,
  TypographyProps
} from 'styled-system'
import { rem } from 'polished'

export const styleComposition = compose(space, height, color, typography)

export type StyleProps = SpaceProps & ColorProps & TypographyProps

export const headingStyle = css`
  color: #202020;
`

export const paragraphStyle = css`
  margin-bottom: ${rem('10px')};
  color: #000;
  font-weight: 400;
`

export const codeStyle = css`
  margin: ${rem('3px')} ${rem('5px')};
  padding: 0.2em 0.4em 0.1em;
  border: ${rem('1px')} solid #d1d1d1;
  border-radius: ${rem('3px')};
  background: #f4f4f4;
  color: #eb5757;
  font-family: Courier, monospace;
  font-size: 85%;
  font-weight: 400;
`
