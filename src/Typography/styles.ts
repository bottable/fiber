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
  margin: 0 0.2em;
  padding: 0.2em 0.4em 0.1em;
  border: 1px solid rgba(100, 100, 100, 0.2);
  border-radius: 3px;
  background: rgba(150, 150, 150, 0.1);
  color: #eb5757;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace;
  font-size: 85%;
`
