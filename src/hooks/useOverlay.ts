import { MergeElementProps } from '../utils'

import { useControl } from './useControl'

import { useEffect, useRef } from 'react'
import { rem } from 'polished'

export type OverlayProps = MergeElementProps<
  'div',
  {
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
    children?: React.ReactNode | React.ReactNode[]
    expand?: boolean
    inline?: boolean
    style?: React.CSSProperties & object
  }
>

export const useOverlay = ({
  trigger,
  visible: visibleProps,
  placement,
  onVisibleChange,
  expand,
  inline
}: OverlayProps) => {
  const wrapperRef = useRef<
    HTMLDivElement & { contains: (e: EventTarget) => Boolean }
    // eslint-disable-next-line indent
  >(null)
  const childrenRef = useRef<HTMLSpanElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const updateVisible = (newValue: boolean) => {
    if (dropdownRef.current) {
      if (inline) {
        dropdownRef.current.style.display = newValue ? 'block' : 'none'
      } else if (expand) {
        dropdownRef.current.style.transform = `scale(${newValue ? 1 : 0})`
      }
    }
  }

  const { value: visible, setValue: setVisible } = useControl({
    value: visibleProps,
    defaultValue: false,
    onChange: onVisibleChange as (newValue: unknown) => unknown,
    sideEffect: updateVisible as (newValue: unknown) => void
  }) as { value: boolean; setValue: (newValue: boolean) => void }

  useEffect(() => {
    if (childrenRef.current && dropdownRef.current && placement) {
      if (inline) {
        dropdownRef.current.style.display = 'none'
        return
      }

      if (
        !placement.toLowerCase().includes('left') &&
        !placement.toLowerCase().includes('right')
      ) {
        let childWidth = childrenRef.current.offsetWidth
        const dropdownWidth = dropdownRef.current.offsetWidth

        if (childrenRef.current.nodeName === 'svg') {
          const svg = childrenRef.current
          const rect = svg.getBoundingClientRect()
          childWidth = rect.width
        }

        const offset = (childWidth - dropdownWidth) / 2
        dropdownRef.current.style.left = rem(`${offset}px`)
      } else if (
        !placement.toLowerCase().includes('top') &&
        !placement.toLowerCase().includes('bottom')
      ) {
        let childHeight = childrenRef.current.offsetHeight
        const dropdownHeight = dropdownRef.current.offsetHeight

        if (childrenRef.current.nodeName === 'svg') {
          const svg = childrenRef.current
          const rect = svg.getBoundingClientRect()
          childHeight = rect.height
        }

        const offset = (childHeight - dropdownHeight) / 2
        dropdownRef.current.style.top = rem(`${offset}px`)
      }

      if (expand) {
        dropdownRef.current.style.transform = 'scale(0)'
      }
    }
  }, [childrenRef, dropdownRef])

  const handleClick = (e: Event) => {
    if (wrapperRef.current!.contains(e.target!)) return
    setVisible(false)
  }

  useEffect(() => {
    if (trigger === 'click' && !inline) {
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
        onMouseEnter: () => setVisible(true),
        onMouseLeave: () => setVisible(false)
      }
      break
    case 'click':
      clickProps = {
        onClick: () => setVisible(!visible)
      }
      break
  }

  return {
    wrapperRef,
    childrenRef,
    dropdownRef,
    visible,
    setVisible,
    hoverProps,
    clickProps
  }
}
