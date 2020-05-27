import { normalize } from 'styled-normalize'
import { css, createGlobalStyle } from 'styled-components'

const globalStyle = css`
  ${normalize}
`

export const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`
