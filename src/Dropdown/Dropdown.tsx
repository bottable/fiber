import { useDropdown, DropdownProps } from '../hooks'

import { Wrapper, DropdownWrapper, Description } from './styles'

import React, { FC } from 'react'
import { composeRef } from 'rc-util/lib/ref'

type DropdownFC<P> = FC<P> & {
  Input?: FC<P>
  Button?: FC<P>
}

const Dropdown: DropdownFC<DropdownProps> = React.forwardRef<
  HTMLDivElement,
  DropdownProps
>((props, ref) => {
  const { overlay, children, topped, description, placement, ...rest } = props

  const {
    wrapperRef,
    childrenRef,
    dropdownRef,
    visible,
    handleVisibleChange,
    hoverProps,
    clickProps
  } = useDropdown(props)

  const descriptionNode = description ? (
    <Description>{description}</Description>
  ) : null

  const childrenNode = Array.isArray(children)
    ? ((<span>{children}</span>) as any)
    : (children as any)

  let n
  if (overlay) {
    n = Array.isArray(overlay.props.children)
      ? overlay.props.children.length
      : 1
  }
  n *= 37
  n += description ? 21 : 0

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
      <DropdownWrapper
        visible={visible}
        topped={topped}
        placement={placement}
        ref={dropdownRef}
        n={n}
      >
        {descriptionNode}
        {React.cloneElement(overlay!, {
          collapse: () => {
            handleVisibleChange(false)
          }
        })}
      </DropdownWrapper>
    </Wrapper>
  )
})

Dropdown.defaultProps = {
  trigger: 'hover',
  placement: 'bottomLeft'
}

export { Dropdown }
