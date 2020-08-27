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
  const {
    overlay,
    children,
    width,
    topped,
    description,
    placement,
    ...rest
  } = props

  const {
    wrapperRef,
    childrenRef,
    dropdownRef,
    visible,
    handleVisibleChange,
    hoverProps,
    clickProps,
    n
  } = useDropdown(props)

  const descriptionNode = description ? (
    <Description>{description}</Description>
  ) : null

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
      <DropdownWrapper
        visible={visible}
        width={width}
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
