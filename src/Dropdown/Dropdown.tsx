import { useOverlay, OverlayProps, useCollapse } from '../hooks'

import { Wrapper, DropdownWrapper, Description } from './styles'

import React from 'react'
import { composeRef } from 'rc-util/lib/ref'

export interface DropdownProps extends OverlayProps {
  description?: string
  overlay?: React.ReactElement
  topped?: boolean
  width?: number
  staticPos?: boolean
  style?: React.CSSProperties & object
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
      style,
      staticPos
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

    const { collapseRef, height } = useCollapse({ children: childrenNode })

    return (
      <Wrapper
        ref={composeRef<HTMLDivElement>(wrapperRef, ref)}
        style={style}
        staticPos={staticPos}
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
          ref={
            composeRef(dropdownRef, collapseRef) as React.RefObject<
              HTMLDivElement
            >
          }
          width={width}
          height={height}
          collapsed={!visible}
          staticPos={staticPos}
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
