import { Wrapper, DropdownWrapper } from './styles'
import Input from './Input'

import React, { useState, FC, useRef, useEffect, useCallback } from 'react'

export type MenuFunc = () => React.ReactElement
export type DropdownProps = {
  overlay?: React.ReactElement | MenuFunc
  trigger?: 'hover' | 'click'
  expand?: boolean
  width?: number
  dropdown?: boolean
}

type DropdownFC<P> = FC<P> & {
  Input: FC<P>
}

const Dropdown: DropdownFC<DropdownProps> = ({
  overlay,
  trigger,
  children,
  expand: expandProps,
  width,
  dropdown,
  ...props
}) => {
  const wrapperRef = useRef<
    HTMLDivElement & { contains: (e: EventTarget) => Boolean }
    // eslint-disable-next-line indent
  >(null)
  const [expand, setExpand] = useState(false)

  const handleClick = useCallback(
    (e: Event) => {
      if (wrapperRef.current!.contains(e.target!)) return
      setExpand(false)
    },
    [setExpand]
  )

  useEffect(() => {
    if (typeof expandProps === 'boolean') {
      setExpand(expandProps)
      return () => {}
    } else {
      document.addEventListener('mousedown', handleClick)
      return () => {
        document.removeEventListener('mousedown', handleClick)
      }
    }
  }, [handleClick, expandProps])

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

  const overlayNode = typeof overlay === 'function' ? overlay() : overlay

  return (
    <Wrapper ref={wrapperRef} {...triggerProps} {...props}>
      {children}
      <DropdownWrapper expand={expand} width={width} dropdown={dropdown}>
        {overlayNode}
      </DropdownWrapper>
    </Wrapper>
  )
}

Dropdown.defaultProps = {
  trigger: 'hover'
}

Dropdown.Input = Input

export { Dropdown }
