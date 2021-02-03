import { StyledContent } from './styles'

import React, { FC } from 'react'

export type ContentProps = {
  style?: React.CSSProperties & object
}

const Content: FC<ContentProps> = ({ children, ...props }) => {
  return <StyledContent {...props}>{children}</StyledContent>
}

export { Content }
