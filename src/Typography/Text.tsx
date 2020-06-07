import { TypoProps, codeStyle, typoComposition } from './styles'
import Typography from './Typography'

import * as React from 'react'
import { css } from 'styled-components'
import { rem } from 'polished'

export interface TextProps extends TypoProps {
  strong?: boolean
  highlight?: boolean
  code?: boolean
}

const style = css<TextProps>`
  ${typoComposition};
  ${(props) => (props.code ? codeStyle : null)};

  margin-top: ${rem('30px')};
  background-color: ${(props) => (props.highlight ? '#ffe58f' : null)};
  font-weight: ${(props) => (props.strong ? 'bolder' : '300')};
`

const Text: React.FC<TextProps> = (props) => {
  return <Typography component='span' accent={style} {...props} />
}

export { Text }
