import { normalize } from 'styled-normalize'
import { css, createGlobalStyle } from 'styled-components'

const globalStyle = css`
  ${normalize}

  body {
    font-family: 'Work Sans', sans-serif;
  }

  ::selection {
    background-color: #dfc5de;
  }
`

export const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`
