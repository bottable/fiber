import { CollapseContainer } from '../styles'

import React, { useEffect, useRef, useState } from 'react'

type CollapseProps = {
  children?: React.ReactNode | React.ReactNode[]
  collapsed?: boolean
}

export const useCollapse = ({ children, collapsed }: CollapseProps) => {
  const [height, setHeight] = useState<number | undefined>(undefined)
  const [expanded, setExpanded] = useState<boolean>(
    collapsed !== undefined ? !collapsed : false
  )

  const collapseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (collapseRef.current && height === undefined) {
      setHeight(collapseRef.current.offsetHeight)
    }
  }, [collapseRef])

  useEffect(() => {
    if (collapsed === true) setExpanded(false)
  }, [collapsed])

  return {
    childrenNode: (
      <CollapseContainer
        height={height}
        collapsed={collapsed}
        expanded={expanded}
        onTransitionEnd={({ propertyName }) => {
          if (propertyName === 'max-height' && collapsed === false) {
            setExpanded(true)
          }
        }}
        ref={collapseRef}
      >
        {children}
      </CollapseContainer>
    ),
    height: height,
    collapseRef: collapseRef
  }
}
