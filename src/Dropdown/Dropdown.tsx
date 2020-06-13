import { styleComposition, StyleProps } from '../utils/styles'

import styled from 'styled-components'
import React, {
  useState,
  FC,
  useRef,
  useEffect,
  ReactElement,
  useCallback
} from 'react'

export type TriggerType = 'hover' | 'click'

export type MenuFunc = () => React.ReactElement
export interface DropdownProps extends StyleProps {
  menu: ReactElement | MenuFunc
  trigger: TriggerType
}

// TODO: ADD A BETTER TYPE FOR THIS
const Wrapper = styled.div<any>`
  ${styleComposition}

  display: inline-block;
`

const DropdownWrapper = styled.div<any>`
  ${styleComposition}

  position: absolute;
  z-index: 999;
  min-width: 160px;
  background-color: #f9f9f9;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
`

const useDropdownStatus = (trigger: TriggerType) => {
  const node = useRef<
    HTMLDivElement & { contains: (e: EventTarget) => Boolean }
  // eslint-disable-next-line indent
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

  const menuNode = typeof menu === 'function' ? (menu as MenuFunc)() : menu

  return (
    <Wrapper ref={node} {...triggerProps} {...props}>
      {children}
      <DropdownWrapper>{expand ? menuNode : null}</DropdownWrapper>
    </Wrapper>
  )
}

Dropdown.defaultProps = {
  trigger: 'hover'
}

export { Dropdown }
