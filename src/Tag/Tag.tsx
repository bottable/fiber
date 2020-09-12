import { Color } from '../types'

import { StyledTag, CloseContainer, IconContainer } from './styles'

import React, { FC, useState, useEffect } from 'react'
import CloseIcon from '@material-ui/icons/Close'

export type TagProps = {
  closable?: boolean
  visible?: boolean
  onClose?: Function
  color?: Color | string
  icon?: React.ReactNode
}

const Tag: FC<TagProps> = ({ children, ...props }) => {
  const { closable, visible: visibleProps, onClose, color, icon } = props
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

  const iconNode = icon ? (
    <IconContainer color={color}>{icon}</IconContainer>
  ) : null
  const closeNode = closable ? (
    <CloseContainer color={color}>
      <CloseIcon onClick={handleClose} />
    </CloseContainer>
  ) : null

  return (
    <StyledTag {...props} visible={visible}>
      {iconNode}
      {children}
      {closeNode}
    </StyledTag>
  )
}

export { Tag }
