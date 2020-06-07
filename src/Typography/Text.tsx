import { codeStyle, styleComposition } from './styles'

import { SpaceProps, ColorProps, TypographyProps } from 'styled-system'
import styled from 'styled-components'
import { rem } from 'polished'

export interface TextProps extends SpaceProps, ColorProps, TypographyProps {
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
