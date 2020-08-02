import { StyleProps } from '../utils/styles'

import { StyledTag } from './styles'

import React, { FC } from 'react'

export interface TagProps extends StyleProps {
  // custom props here
}

const Tag: FC<TagProps> = ({ children, ...props }) => {
  return <StyledTag {...props}>{children}</StyledTag>
}

export { Tag }
