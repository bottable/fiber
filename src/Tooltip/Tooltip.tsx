import { useDropdown, DropdownProps } from '../hooks'

import { Wrapper, TooltipWrapper } from './styles'

import React, { FC } from 'react'
import { composeRef } from 'rc-util/lib/ref'

export interface TooltipProps extends DropdownProps {
  title?: string
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

const Tooltip: FC = React.forwardRef<HTMLDivElement, TooltipProps>(
  (props, ref) => {
    const { children, placement, title, color, ...rest } = props

    const {
      wrapperRef,
      childrenRef,
      dropdownRef,
      visible,
      hoverProps,
      clickProps
    } = useDropdown({ ...props, expand: true })

    const childrenNode = Array.isArray(children)
      ? ((<span>{children}</span>) as any)
      : (children as any)

    return (
      <Wrapper
        ref={composeRef<HTMLDivElement>(wrapperRef, ref)}
        {...hoverProps}
        {...rest}
      >
        {React.cloneElement(childrenNode, {
          ...clickProps,
          ref: composeRef(childrenRef, childrenNode.ref)
        })}
        <TooltipWrapper
          visible={visible}
          placement={placement}
          color={color}
          ref={dropdownRef}
        >
          {title}
        </TooltipWrapper>
      </Wrapper>
    )
  }
)

Tooltip.defaultProps = {
  trigger: 'hover',
  placement: 'topCenter'
}

export { Tooltip }
