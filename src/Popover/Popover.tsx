import { useOverlay, OverlayProps } from '../hooks'
import { Card } from '../Card'

import { Wrapper, PopoverWrapper } from './styles'

import React, { FC } from 'react'
import { composeRef } from 'rc-util/lib/ref'

export interface PopoverProps extends OverlayProps {
  content?: string
  title?: string
}

const Popover: FC = React.forwardRef<HTMLDivElement, PopoverProps>(
  (props, ref) => {
    const { children, placement, title, content, style } = props

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

    return (
      <Wrapper
        ref={composeRef<HTMLDivElement>(wrapperRef, ref)}
        {...hoverProps}
      >
        {React.cloneElement(childrenNode, {
          ...clickProps,
          ref: composeRef(childrenRef, childrenNode.ref)
        })}
        <PopoverWrapper
          visible={visible}
          placement={placement}
          ref={dropdownRef}
        >
          <Card title={title} size='sm' bordered={false} style={style}>
            {content}
          </Card>
        </PopoverWrapper>
      </Wrapper>
    )
  }
)

Popover.defaultProps = {
  trigger: 'hover',
  placement: 'topCenter'
}

export { Popover }
