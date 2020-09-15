import { Color } from '../types'
import { useControl } from '../hooks'

import { StyledTag, CloseContainer, IconContainer } from './styles'

import React, { FC } from 'react'
import CloseIcon from '@material-ui/icons/Close'

export type TagProps = {
  closable?: boolean
  visible?: boolean
  onClose?: Function
  color?: Color | string
  icon?: React.ReactNode
  style?: React.CSSProperties & object
}

const Tag: FC<TagProps> = ({ children, ...props }) => {
  const {
    closable,
    visible: visibleProps,
    onClose: onCloseProps,
    color,
    icon
  } = props

  const onClose = (e: React.MouseEvent<HTMLElement | SVGSVGElement>) => {
    e.stopPropagation()
    if (onCloseProps) onCloseProps(e)
    if (e.defaultPrevented) return
    return false
  }

  const { value: visible, setValue: setVisible } = useControl({
    value: visibleProps,
    defaultValue: true,
    onChange: onClose as (newValue: unknown) => unknown
  }) as {
    value: boolean
    setValue: (newValue: React.MouseEvent<HTMLElement | SVGSVGElement>) => void
  }

  const iconNode = icon ? (
    <IconContainer color={color}>{icon}</IconContainer>
  ) : null
  const closeNode = closable ? (
    <CloseContainer color={color}>
      <CloseIcon onClick={setVisible} />
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
