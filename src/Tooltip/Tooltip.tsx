import { Color } from '../types'
import { useOverlay, OverlayProps } from '../hooks'

import { Wrapper, TooltipWrapper, RelativeSpan } from './styles'

import React, { FC } from 'react'
import { composeRef } from 'rc-util/lib/ref'

export interface TooltipProps extends OverlayProps {
  title?: string
  color?: Color | string
}

export type TriangleProps = {
  xTriangle: number
  color?: Color | string
  visible?: boolean
}

const Tooltip: FC<TooltipProps> = React.forwardRef<
  HTMLDivElement,
  TooltipProps
>((props, ref) => {
  const { children, placement, title, color, inline, style, ...rest } = props

  const {
    wrapperRef,
    childrenRef,
    dropdownRef,
    visible,
    hoverProps,
    clickProps
  } = useOverlay({ ...props, expand: true })

  const childrenNode = Array.isArray(children)
    ? ((<span>{children}</span>) as any)
    : (children as any)

  const wrapperProps = Array.isArray(children) ? {} : (children as any).props

  const tooltipNode = (
    <TooltipWrapper
      visible={visible}
      placement={placement}
      color={color}
      ref={dropdownRef}
      inline={inline}
      style={style}
    >
      {title}
    </TooltipWrapper>
  )

  return (
    <React.Fragment>
      <Wrapper
        ref={composeRef<HTMLDivElement>(wrapperRef, ref)}
        {...wrapperProps}
        {...hoverProps}
        {...rest}
      >
        {React.cloneElement(childrenNode, {
          ...clickProps,
          ref: composeRef(childrenRef, childrenNode.ref)
        })}
        {inline ? null : tooltipNode}
      </Wrapper>
      {inline ? <RelativeSpan>{tooltipNode}</RelativeSpan> : null}
    </React.Fragment>
  )
})

Tooltip.defaultProps = {
  trigger: 'hover',
  placement: 'top'
}

export { Tooltip }
