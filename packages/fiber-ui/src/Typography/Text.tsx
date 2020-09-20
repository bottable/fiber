import { styleComposition, StyleProps } from '../utils/styles'

import { codeStyle } from './styles'

import styled, { css } from 'styled-components'

export type TextSizeType = 1 | 2 | 3 | 4 | 5

export interface TextProps extends StyleProps {
  strong?: boolean
  highlight?: boolean
  code?: boolean
  size?: TextSizeType
}

const textVariant = ({ size }: TextProps) => {
  let fontsize = '11px'

  switch (size) {
    case 1:
      fontsize = '11px'
      break
    case 2:
      fontsize = '12px'
      break
    case 3:
      fontsize = '14px'
      break
    case 4:
      fontsize = '16px'
      break
    case 5:
      fontsize = '20px'
      break
  }

  return css`
    font-size: ${fontsize};
  `
}

const Text = styled.span<TextProps>`
  ${(props) => (props.code ? codeStyle : null)};
  ${textVariant};

  background-color: ${(props) => (props.highlight ? '#FFE69A' : null)};
  font-weight: ${({ strong, theme }) =>
    strong ? theme.fontWeights.bold : theme.fontWeights.regular};

  ${styleComposition};
`

Text.defaultProps = {
  size: 4
}

export { Text }
