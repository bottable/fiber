import { styleComposition, StyleProps } from '../utils/styles'

import styled from 'styled-components'
import React, {
  useState,
  FC,
  useRef,
  useEffect,
  ReactNode,
  useCallback
} from 'react'

export type TriggerType = 'hover' | 'click'

export interface DropdownProps extends StyleProps {
  menu: ReactNode
  trigger: TriggerType
}

// TODO: ADD A BETTER TYPE FOR THIS
const Wrapper = styled.div<any>`
  ${styleComposition}

  display: inline-block;
`

const useDropdownStatus = (trigger: TriggerType) => {
  const node = useRef<
    HTMLDivElement & { contains: (e: EventTarget) => Boolean }
  >(null)
  const [expand, setExpand] = useState(false)

  const handleClick = useCallback(
    (e: Event) => {
      if (node.current!.contains(e.target!)) return
      setExpand(false)
    },
    [setExpand]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [handleClick])

  const hoverProps = {
    onMouseEnter: useCallback(() => setExpand(true), [setExpand]),
    onMouseLeave: useCallback(() => setExpand(false), [setExpand])
  }
  const clickProps = {
    onClick: useCallback(() => setExpand(true), [setExpand])
  }

  let triggerProps
  switch (trigger) {
    case 'hover':
      triggerProps = hoverProps
      break
    case 'click':
      triggerProps = clickProps
      break
  }

  return [node, expand, triggerProps]
}

const Dropdown: FC<DropdownProps> = ({ menu, trigger, children, ...props }) => {
  const [node, expand, triggerProps] = useDropdownStatus(trigger)

  return (
    <Wrapper ref={node} {...triggerProps} {...props}>
      {children}
      {expand ? menu : null}
    </Wrapper>
  )
}

Dropdown.defaultProps = {
  trigger: 'hover'
}

export { Dropdown }
