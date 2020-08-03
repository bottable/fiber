import { StyledTag, IconContainer } from './styles'

import React, { FC } from 'react'
import CloseIcon from '@material-ui/icons/Close'

export type TagProps = {
  closable?: boolean
}

const Tag: FC<TagProps> = ({ children, ...props }) => {
  const { closable } = props

  return (
    <StyledTag {...props}>
      {children}
      {closable ? (
        <IconContainer>
          <CloseIcon />
        </IconContainer>
      ) : null}
    </StyledTag>
  )
}

export { Tag }
