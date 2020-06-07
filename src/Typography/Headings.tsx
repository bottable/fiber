import { typoComposition, headingStyle, TypoProps } from './styles'
import Typography from './Typography'

import * as React from 'react'
import { css } from 'styled-components'
import { rem } from 'polished'

const SIZES: Set<number> = new Set([1, 2, 3, 4, 5, 6])

export interface HeadingProps extends TypoProps {
  size: 1 | 2 | 3 | 4 | 5 | 6
}

const style = css`
  ${typoComposition};
  ${headingStyle};

  margin-top: ${rem('30px')};
  font-weight: 500;
`

const Heading: React.FC<HeadingProps> = ({ size, ...props }) => {
  const component = SIZES.has(size) ? `h${size}` : 'h1'
  return <Typography component={component} accent={style} {...props} />
}

export { Heading }
