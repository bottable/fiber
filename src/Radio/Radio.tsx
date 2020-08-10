import { StyledRadio } from './styles'

import React, { FC } from 'react'

export type RadioProps = {
  // custom props here
}

const Radio: FC<RadioProps> = ({ children, ...props }) => {
  return <StyledRadio {...props}>{children}</StyledRadio>
}

export { Radio }
