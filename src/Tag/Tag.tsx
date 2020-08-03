import { StyledTag, IconContainer } from './styles'

import React, { FC, useState, useEffect } from 'react'
import CloseIcon from '@material-ui/icons/Close'

export type TagProps = {
  closable?: boolean
  visible?: boolean
  onClose?: Function
  color?:
    | 'blue'
    | 'green'
    | 'magenta'
    | 'neutral'
    | 'orange'
    | 'purple'
    | 'red'
    | 'teal'
    | 'yellow'
}

const Tag: FC<TagProps> = ({ children, ...props }) => {
  const { closable, visible: visibleProps, onClose, color } = props
  const [visible, setVisible] = useState<boolean>(true)
  useEffect(() => {
    if (typeof visibleProps === 'boolean') {
      setVisible(visibleProps!)
    }
  }, [visibleProps])

  const handleClose = (e: React.MouseEvent<HTMLElement | SVGSVGElement>) => {
    e.stopPropagation()
    if (onClose) onClose(e)
    if (e.defaultPrevented) return
    if (typeof visibleProps !== 'boolean') setVisible(false)
  }

  return (
    <StyledTag {...props} visible={visible}>
      {children}
      {closable ? (
        <IconContainer color={color}>
          <CloseIcon onClick={handleClose} />
        </IconContainer>
      ) : null}
    </StyledTag>
  )
}

export { Tag }
