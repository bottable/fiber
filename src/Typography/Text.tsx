import { codeStyle, styleComposition, StyleProps } from './styles'

import styled from 'styled-components'

export interface TextProps extends StyleProps {
  strong?: boolean
  highlight?: boolean
  code?: boolean
}

const Text = styled.span<TextProps>`
  ${styleComposition};
  ${(props) => (props.code ? codeStyle : null)};

  background-color: ${(props) => (props.highlight ? '#ffe58f' : null)};
  font-weight: ${(props) => (props.strong ? 'bolder' : '300')};
`

Text.defaultProps = {
  fontSize: 16
}

export { Text }
