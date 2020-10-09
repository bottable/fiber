import { Color } from '../types'
import { useControl } from '../hooks'

import { StyledTag, CloseContainer, IconContainer } from './styles'

import React, { FC } from 'react'
import { MdClose } from 'react-icons/md'

export type TagProps = {
  closable?: boolean
  visible?: boolean
  onClose?: Function
  color?: Color | string
  icon?: React.ReactNode
  shrink?: boolean
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

  const onClose = (e: React.MouseEvent<SVGSVGElement>) => {
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
    setValue: (newValue: React.MouseEvent<SVGSVGElement>) => void
  }

  const iconNode = icon ? (
    <IconContainer color={color}>{icon}</IconContainer>
  ) : null
  const closeNode = closable ? (
    <CloseContainer color={color}>
      <MdClose onClick={setVisible} />
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
