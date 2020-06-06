import { headingComposition, headingStyle } from './styles'

import styled from 'styled-components'
import { SpaceProps, ColorProps, TypographyProps } from 'styled-system'
import { rem } from 'polished'

export type HeadingProps = SpaceProps & ColorProps & TypographyProps

const H1 = styled.h1<HeadingProps>`
  ${headingStyle};
  ${headingComposition};

  margin-top: ${rem('20px')};
  font-size: ${rem('39px')};
  font-weight: 700;
`

export { H1 }
