import { normalize } from 'styled-normalize'
import { css, createGlobalStyle } from 'styled-components'

const globalStyle = css`
  ${normalize}

  * {
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }
`

export const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`
