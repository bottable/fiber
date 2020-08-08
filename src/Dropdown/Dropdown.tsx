import { Wrapper, DropdownWrapper, Description } from './styles'
import Input from './Input'

import React, { useState, FC, useRef, useEffect, useCallback } from 'react'
import { composeRef } from 'rc-util/lib/ref'

export type MenuFunc = () => React.ReactElement
export type DropdownProps = {
  overlay?: React.ReactElement | MenuFunc
  trigger?: 'hover' | 'click'
  expand?: boolean
  width?: number
  dropdown?: boolean
  collapse?: () => void
  description?: string
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'
}

type DropdownFC<P> = FC<P> & {
  Input?: FC<P>
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
      expand: expandProps,
      width,
      dropdown,
      collapse: collapseProps,
      description,
      placement,
      ...props
    },
    ref
  ) => {
    const wrapperRef = useRef<
      HTMLDivElement & { contains: (e: EventTarget) => Boolean }
      // eslint-disable-next-line indent
    >(null)
    const [expand, setExpand] = useState(false)

    const collapse = () => {
      if (collapseProps) collapseProps()
      else setExpand(false)
    }

    const handleClick = (e: Event) => {
      if (wrapperRef.current!.contains(e.target!)) return
      collapse()
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
      if (typeof expandProps === 'boolean') {
        setExpand(expandProps)
      }
    }, [expandProps])

    const hoverProps = {
      onMouseEnter: useCallback(() => setExpand(true), [setExpand]),
      onMouseLeave: useCallback(() => setExpand(false), [setExpand])
    }
    const clickProps = {
      onClick: useCallback(() => setExpand(true), [setExpand])
    }

    let triggerProps
    if (typeof expandProps !== 'boolean') {
      switch (trigger) {
        case 'hover':
          triggerProps = hoverProps
          break
        case 'click':
          triggerProps = clickProps
          break
      }
    }

    const overlayNode =
      typeof overlay === 'function'
        ? (overlay() as React.ReactElement)
        : (overlay as React.ReactElement)

    const descriptionNode = description ? (
      <Description>{description}</Description>
    ) : null

    return (
      <Wrapper
        ref={composeRef<HTMLDivElement>(wrapperRef, ref)}
        {...triggerProps}
        {...props}
      >
        {children}
        <DropdownWrapper
          expand={expand}
          width={width}
          dropdown={dropdown}
          placement={placement}
        >
          {descriptionNode}
          {React.cloneElement(overlayNode, {
            collapse: collapse
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

Dropdown.Input = Input

export { Dropdown }
