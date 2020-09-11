import { useControl } from './useControl'

import { useEffect, useRef } from 'react'
import { rem } from 'polished'

export type OverlayProps = {
  trigger?: 'hover' | 'click'
  visible?: boolean
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
  children?: React.ReactNode
  expand?: boolean
  style?: object
}

export const useOverlay = ({
  trigger,
  visible: visibleProps,
  placement,
  onVisibleChange,
  expand
}: OverlayProps) => {
  const wrapperRef = useRef<
    HTMLDivElement & { contains: (e: EventTarget) => Boolean }
    // eslint-disable-next-line indent
  >(null)
  const childrenRef = useRef<HTMLSpanElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const updateVisible = (newValue: boolean) => {
    if (dropdownRef.current && expand) {
      dropdownRef.current.style.transform = `scale(${newValue ? 1 : 0})`
    }
  }

  const { value: visible, setValue: setVisible } = useControl({
    value: visibleProps,
    defaultValue: false,
    updateValue: updateVisible as (newValue: unknown) => void
  }) as { value: boolean; setValue: (newValue: boolean) => void }

  useEffect(() => {
    if (childrenRef.current && dropdownRef.current && placement) {
      if (
        !placement.toLowerCase().includes('left') &&
        !placement.toLowerCase().includes('right')
      ) {
        const offset =
          (childrenRef.current.offsetWidth - dropdownRef.current.offsetWidth) /
          2
        dropdownRef.current.style.left = rem(`${offset}px`)
      }

      if (
        !placement.toLowerCase().includes('top') &&
        !placement.toLowerCase().includes('bottom')
      ) {
        const offset =
          (childrenRef.current.offsetHeight -
            dropdownRef.current.offsetHeight) /
          2
        dropdownRef.current.style.top = rem(`${offset}px`)
      }

      if (expand) {
        dropdownRef.current.style.transform = 'scale(0)'
      }
    }
  }, [childrenRef, dropdownRef])

  const handleVisibleChange = (flag: boolean) => {
    if (onVisibleChange) {
      onVisibleChange(flag)
    }
    setVisible(flag)
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
        onClick: () => handleVisibleChange(!visible)
      }
      break
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
