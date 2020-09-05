import { useDropdown, DropdownProps as BaseDropdownProps } from '../hooks'

import { Wrapper, DropdownWrapper, Description } from './styles'

import React from 'react'
import { composeRef } from 'rc-util/lib/ref'

export interface DropdownProps extends BaseDropdownProps {
  n?: number
  description?: string
  overlay?: React.ReactElement
  topped?: boolean
  width?: number
}

// TO DO: Find a proper way to type this
type DropdownFC = any

const Dropdown: DropdownFC = React.forwardRef<HTMLDivElement, DropdownProps>(
  (props, ref) => {
    const {
      overlay,
      children,
      topped,
      description,
      placement,
      width,
      ...rest
    } = props

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
          width={width}
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
  }
)

Dropdown.defaultProps = {
  trigger: 'hover',
  placement: 'bottomLeft'
}

export { Dropdown }
