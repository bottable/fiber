import { useState, useEffect, useRef } from 'react'
import { rem } from 'polished'

export type DropdownProps = {
  overlay?: React.ReactElement
  trigger?: 'hover' | 'click'
  visible?: boolean
  width?: number
  topped?: boolean
  placement?:
    | 'bottomLeft'
    | 'bottomCenter'
    | 'bottomRight'
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
  onVisibleChange?: (flag: boolean) => void
  n?: number
  children?: React.ReactNode
  description?: string
}

export const useDropdown = ({
  overlay,
  trigger,
  visible: visibleProps,
  description,
  placement,
  onVisibleChange
}: DropdownProps) => {
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

  let n
  if (overlay) {
    n = Array.isArray(overlay.props.children)
      ? overlay.props.children.length
      : 1
  }
  n *= 37
  n += description ? 21 : 0

  return {
    wrapperRef,
    childrenRef,
    dropdownRef,
    visible,
    handleVisibleChange,
    hoverProps,
    clickProps,
    n
  }
}
