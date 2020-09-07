import { StyledContent } from './styles'

import React, { FC } from 'react'

export type ContentProps = {
  // custom props here
}

const Content: FC<ContentProps> = ({ children, ...props }) => {
  return <StyledContent {...props}>{children}</StyledContent>
}

export { Content }
