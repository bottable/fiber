import { Wrapper, DropdownWrapper } from './styles'
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
      collapse,
      ...props
    },
    ref
  ) => {
    const wrapperRef = useRef<
      HTMLDivElement & { contains: (e: EventTarget) => Boolean }
      // eslint-disable-next-line indent
    >(null)
    const [expand, setExpand] = useState(false)

    const handleClick = (e: Event) => {
      if (wrapperRef.current!.contains(e.target!)) return
      if (collapse) collapse()
      else setExpand(false)
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

    return (
      <Wrapper
        ref={composeRef<HTMLDivElement>(wrapperRef, ref)}
        {...triggerProps}
        {...props}
      >
        {children}
        <DropdownWrapper expand={expand} width={width} dropdown={dropdown}>
          {React.cloneElement(overlayNode, {
            collapse: () => {
              if (collapse) collapse()
              else setExpand(false)
            }
          })}
        </DropdownWrapper>
      </Wrapper>
    )
  }
)

Dropdown.defaultProps = {
  trigger: 'hover'
}

Dropdown.Input = Input

export { Dropdown }
