import { Wrapper, DropdownWrapper, Description } from './styles'

import React, { useState, FC, useRef, useEffect } from 'react'
import { composeRef } from 'rc-util/lib/ref'
import { rem } from 'polished'

export type MenuFunc = () => React.ReactElement
export type DropdownProps = {
  overlay?: React.ReactElement | MenuFunc
  trigger?: 'hover' | 'click'
  visible?: boolean
  width?: number
  topped?: boolean
  description?: string
  placement?:
    | 'bottomLeft'
    | 'bottomCenter'
    | 'bottomRight'
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
  onVisibleChange?: (flag: boolean) => void
  n?: number
}

type DropdownFC<P> = FC<P> & {
  Input?: FC<P>
  Button?: FC<P>
}

const Dropdown: DropdownFC<DropdownProps> = React.forwardRef<
  HTMLDivElement,
  DropdownProps
>(
  (
    {
      overlay,
      trigger,
      children,
      visible: visibleProps,
      width,
      topped,
      description,
      placement,
      onVisibleChange,
      ...props
    },
    ref
  ) => {
    const wrapperRef = useRef<
      HTMLDivElement & { contains: (e: EventTarget) => Boolean }
      // eslint-disable-next-line indent
    >(null)
    const childrenRef = useRef<HTMLSpanElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    const handleVisibleChange = (flag: boolean) => {
      if (onVisibleChange) {
        onVisibleChange(flag)
      } else setVisible(flag)
    }

    const handleClick = (e: Event) => {
      if (wrapperRef.current!.contains(e.target!)) return
      handleVisibleChange(false)
    }

    useEffect(() => {
      if (trigger === 'click') {
        document.addEventListener('mousedown', handleClick)
        return () => {
          document.removeEventListener('mousedown', handleClick)
        }
      } else return () => {}
    }, [])

    useEffect(() => {
      if (typeof visibleProps === 'boolean') {
        setVisible(visibleProps)
      }
    }, [visibleProps])

    let hoverProps = {}
    let clickProps = {}

    switch (trigger) {
      case 'hover':
        hoverProps = {
          onMouseEnter: () => handleVisibleChange(true),
          onMouseLeave: () => handleVisibleChange(false)
        }
        break
      case 'click':
        clickProps = {
          onClick: () => handleVisibleChange(true)
        }
        break
    }

    const overlayNode =
      typeof overlay === 'function'
        ? (overlay() as React.ReactElement)
        : (overlay as React.ReactElement)

    const descriptionNode = description ? (
      <Description>{description}</Description>
    ) : null

    const childrenNode = Array.isArray(children)
      ? ((<span>{children}</span>) as any)
      : (children as any)

    if (
      childrenRef.current &&
      dropdownRef.current &&
      placement &&
      placement.includes('Center')
    ) {
      const offset =
        (childrenRef.current.offsetWidth - dropdownRef.current.offsetWidth) / 2
      dropdownRef.current.style.left = rem(`${offset}px`)
    }

    let n = overlayNode
      ? Array.isArray(overlayNode.props.children)
        ? overlayNode.props.children.length
        : 1
      : 0
    n *= 37
    n += description ? 21 : 0

    return (
      <Wrapper
        ref={composeRef<HTMLDivElement>(wrapperRef, ref)}
        {...hoverProps}
        {...props}
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
          {React.cloneElement(overlayNode, {
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
