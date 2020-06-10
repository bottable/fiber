import { styleComposition, StyleProps } from './styles'

import styled from 'styled-components'
import React, { useState, FC, useRef, useEffect, ReactNode } from 'react'

export type TriggerType = 'hover' | 'click'

export interface DropdownProps extends StyleProps {
  menu: ReactNode;
  trigger: TriggerType;
}

const Wrapper = styled.div<any>`
 ${styleComposition}
`

const Dropdown: FC<DropdownProps> = ({
  menu,
  trigger,
  children,
  ...props
}) => {
  const node = useRef<{ contains:(e: EventTarget) => Boolean }>(null)
  const [expand, setExpand] = useState(false)

  const handleClick = (e: Event) => {
    if (node!.current!.contains(e.target!)) return
    setExpand(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const useHandler = {
    click: {
      onClick: () => setExpand(true)
    },
    hover: {
      onMouseEnter: () => setExpand(true),
      onMouseLeave: () => setExpand(false)
    }
  }

  return (
    <Wrapper ref={node} {...useHandler[trigger]} {...props}>
      <div>
        {children}
        {expand ? menu : null}
      </div>
    </Wrapper>
  )
}

Dropdown.defaultProps = {
  menu: undefined,
  trigger: 'hover'
}

export { Dropdown }
