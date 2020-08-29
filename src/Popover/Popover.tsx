import { useDropdown, DropdownProps } from '../hooks'
import { Card } from '../Card'

import { Wrapper, PopoverWrapper, Triangle } from './styles'

import React, { FC } from 'react'
import { composeRef } from 'rc-util/lib/ref'

export interface PopoverProps extends DropdownProps {
  content?: string
  title?: string
}

const Popover: FC = React.forwardRef<HTMLDivElement, PopoverProps>(
  (props, ref) => {
    const { children, placement, title, content, ...rest } = props

    const {
      wrapperRef,
      childrenRef,
      dropdownRef,
      visible,
      hoverProps,
      clickProps
    } = useDropdown(props)

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
        <PopoverWrapper
          visible={visible}
          placement={placement}
          ref={dropdownRef}
        >
          <Card title={title} size='sm' bordered={false}>
            {content}
          </Card>
        </PopoverWrapper>
        <Triangle visible={visible} placement={placement} />
      </Wrapper>
    )
  }
)

Popover.defaultProps = {
  trigger: 'hover',
  placement: 'topCenter'
}

export { Popover }
