import { useOverlay, OverlayProps } from '../hooks'

import { Wrapper, DropdownWrapper, Description } from './styles'

import React from 'react'
import { composeRef } from 'rc-util/lib/ref'

export interface DropdownProps extends OverlayProps {
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
      style
    } = props

    const {
      wrapperRef,
      childrenRef,
      dropdownRef,
      visible,
      setVisible,
      hoverProps,
      clickProps
    } = useOverlay(props)

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
          style={style}
        >
          {descriptionNode}
          {React.cloneElement(overlay!, {
            collapse: () => {
              setVisible(false)
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
