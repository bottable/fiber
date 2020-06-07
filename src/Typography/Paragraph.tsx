import { styleComposition, StyleProps, paragraphStyle } from './styles'

import styled, { css } from 'styled-components'
import { rem } from 'polished'

export interface ParagraphProps extends StyleProps {
  fontSize?: number
}

const style = css`
  ${styleComposition};
  ${paragraphStyle};
`

const paragraphVariant = ({ fontSize = 16 }: { fontSize?: number }) => {
  let lineheight
  if (fontSize <= 12) lineheight = '18px'
  else if (fontSize > 12 && fontSize <= 14) lineheight = '20px'
  else lineheight = '22px'

  return css`
    line-height: ${rem(lineheight)};
  `
}

const Paragraph = styled.p<ParagraphProps>`
  ${style};

  ${paragraphVariant};
`

export { Paragraph }
