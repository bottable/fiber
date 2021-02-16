import { MergeElementProps } from '../utils'

import { StyledContent } from './styles'

import React, { FC } from 'react'

export type ContentProps = MergeElementProps<
  'div',
  {
    style?: React.CSSProperties & object
  }
>

const Content: FC<ContentProps> = ({ children, ...props }) => {
  return <StyledContent {...props}>{children}</StyledContent>
}

export { Content }
