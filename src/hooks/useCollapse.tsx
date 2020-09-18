import { CollapseContainer } from '../styles'

import React, { useEffect, useRef, useState } from 'react'

type CollapseProps = {
  children?: React.ReactNode | React.ReactNode[]
  collapsed?: boolean
}

export const useCollapse = ({ children, collapsed }: CollapseProps) => {
  const [height, setHeight] = useState<number | undefined>(undefined)

  const collapseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (collapseRef.current && height === undefined) {
      setHeight(collapseRef.current.offsetHeight)
    }
  }, [collapseRef])

  return {
    childrenNode: (
      <CollapseContainer
        height={height}
        collapsed={collapsed}
        ref={collapseRef}
      >
        {children}
      </CollapseContainer>
    ),
    height: height,
    collapseRef: collapseRef
  }
}
