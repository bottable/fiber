import { styleComposition, StyleProps, paragraphStyle } from './styles'

import styled, { css } from 'styled-components'
import { rem } from 'polished'

export interface ParagraphProps extends StyleProps {
  fontSize: number
}

const style = css`
  ${styleComposition};
  ${paragraphStyle};
`

const paragraphVariant = ({ fontSize }: ParagraphProps) => {
  let lineheight
  if (fontSize <= 12) lineheight = '18px'
  else if (fontSize > 12 && fontSize <= 14) lineheight = '20px'
  else if (fontSize > 14 && fontSize <= 16) lineheight = '22px'

  return css({ lineHeight: lineheight && rem(lineheight) })
}

const Paragraph = styled.p<ParagraphProps>`
  ${style};

  ${paragraphVariant};
`

Paragraph.defaultProps = {
  fontSize: 16
}

export { Paragraph }
