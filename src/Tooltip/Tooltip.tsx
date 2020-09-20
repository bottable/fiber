import { Color } from '../types'
import { useOverlay, OverlayProps } from '../hooks'

import { Wrapper, TooltipWrapper, Triangle, RelativeSpan } from './styles'

import React, { FC, useEffect, useState, useRef } from 'react'
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

const Tooltip: FC = React.forwardRef<HTMLDivElement, TooltipProps>(
  (props, ref) => {
    const { children, placement, title, color, inline, style } = props
    const [xTriangle, setXTriangle] = useState<number>(0)

    const {
      wrapperRef,
      childrenRef,
      dropdownRef,
      visible,
      hoverProps,
      clickProps
    } = useOverlay({ ...props, expand: true })

    const triangleRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (childrenRef.current && triangleRef.current) {
        const childRect = childrenRef.current.getBoundingClientRect()
        const triangleRect = triangleRef.current.getBoundingClientRect()
        const offset =
          (childRect.right -
            childRect.left -
            (triangleRect.right - triangleRect.left)) /
          2
        setXTriangle(childRect.x - triangleRect.x + offset)
      }
    }, [childrenRef, triangleRef])

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
        >
          {React.cloneElement(childrenNode, {
            ...clickProps,
            ref: composeRef(childrenRef, childrenNode.ref)
          })}
          {inline ? null : tooltipNode}
        </Wrapper>
        {inline ? (
          <RelativeSpan>
            <Triangle
              xTriangle={xTriangle}
              visible={visible}
              ref={triangleRef}
            />
            {tooltipNode}
          </RelativeSpan>
        ) : null}
      </React.Fragment>
    )
  }
)

Tooltip.defaultProps = {
  trigger: 'hover',
  placement: 'topCenter'
}

export { Tooltip }
