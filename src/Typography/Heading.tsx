import { styleComposition, StyleProps } from '../utils/styles'

import { headingStyle } from './styles'

import styled, { css } from 'styled-components'
import {} from 'styled-system'
import { rem } from 'polished'

export type HeadingSizeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export interface HeadingProps extends StyleProps {
  size?: HeadingSizeType
}

const style = css`
  ${styleComposition};
  ${headingStyle};
`

const headingVariant = ({ size }: HeadingProps) => {
  let fontsize = '39px'
  let fontWeight = 600
  let margintop = '10px'
  let letterSpacing = '0%'

  switch (size) {
    case 1:
      fontsize = '39px'
      fontWeight = 700
      margintop = '20px'
      break
    case 2:
      fontsize = '32px'
      fontWeight = 700
      margintop = '20px'
      letterSpacing = '1%'
      break
    case 3:
      fontsize = '25px'
      break
    case 4:
      fontsize = '20px'
      break
    case 5:
      fontsize = '16px'
      break
    case 6:
      fontsize = '14px'
      break
    case 7:
      fontsize = '12px'
      break
    case 8:
      fontsize = '11px'
      fontWeight = 500
      break
  }

  return css`
    margin-top: ${rem(margintop)};
    font-size: ${rem(fontsize)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing};
  `
}

const Heading = styled.h1<HeadingProps>`
  ${style};

  ${headingVariant};
`

Heading.defaultProps = {
  size: 1
}

export { Heading }
