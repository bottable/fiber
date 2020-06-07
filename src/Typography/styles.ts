import { css } from 'styled-components'
import { compose, space, color, typography, height } from 'styled-system'

export const styleComposition = compose(space, height, color, typography)

export const headingStyle = css`
  color: #202020;
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
