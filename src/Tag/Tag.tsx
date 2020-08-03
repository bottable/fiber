import { StyledTag, IconContainer } from './styles'

import React, { FC, useState, useEffect } from 'react'
import CloseIcon from '@material-ui/icons/Close'

export type TagProps = {
  closable?: boolean
  visible?: boolean
  onClose?: Function
}

const Tag: FC<TagProps> = ({ children, ...props }) => {
  const { closable, visible: visibleProps, onClose } = props
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
        <IconContainer>
          <CloseIcon onClick={handleClose} />
        </IconContainer>
      ) : null}
    </StyledTag>
  )
}

export { Tag }
