import { codeStyle, styleComposition, StyleProps } from './styles'

import styled from 'styled-components'
import { rem } from 'polished'

export interface TextProps extends StyleProps {
  strong?: boolean
  highlight?: boolean
  code?: boolean
}

const Text = styled.span<TextProps>`
  ${styleComposition};
  ${(props) => (props.code ? codeStyle : null)};

  margin-top: ${rem('30px')};
  background-color: ${(props) => (props.highlight ? '#ffe58f' : null)};
  font-weight: ${(props) => (props.strong ? 'bolder' : '300')};
`

export { Text }
