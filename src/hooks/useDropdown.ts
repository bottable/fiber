import { useState, useEffect, useRef } from 'react'
import { rem } from 'polished'

export type DropdownProps = {
  overlay?: React.ReactElement
  trigger?: 'hover' | 'click'
  visible?: boolean
  topped?: boolean
  placement?:
    | 'bottomLeft'
    | 'bottom'
    | 'bottomRight'
    | 'topLeft'
    | 'top'
    | 'topRight'
    | 'rightTop'
    | 'right'
    | 'rightBottom'
    | 'leftTop'
    | 'left'
    | 'leftBottom'
  onVisibleChange?: (flag: boolean) => void
  n?: number
  children?: React.ReactNode
  description?: string
}

export const useDropdown = ({
  trigger,
  visible: visibleProps,
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
    !placement.toLowerCase().includes('left') &&
    !placement.toLowerCase().includes('right')
  ) {
    const offset =
      (childrenRef.current.offsetWidth - dropdownRef.current.offsetWidth) / 2
    dropdownRef.current.style.left = rem(`${offset}px`)
  }

  if (
    childrenRef.current &&
    dropdownRef.current &&
    placement &&
    !placement.toLowerCase().includes('top') &&
    !placement.toLowerCase().includes('bottom')
  ) {
    const offset =
      (childrenRef.current.offsetHeight - dropdownRef.current.offsetHeight) / 2
    dropdownRef.current.style.top = rem(`${offset}px`)
  }

  return {
    wrapperRef,
    childrenRef,
    dropdownRef,
    visible,
    handleVisibleChange,
    hoverProps,
    clickProps
  }
}
