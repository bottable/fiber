import { CollapseContainer } from '../styles'

import React, { useEffect, useState } from 'react'
import { useResizeDetector } from 'react-resize-detector'

type CollapseProps = {
  children?: React.ReactNode | React.ReactNode[]
  collapsed?: boolean
}

export const useCollapse = ({ children, collapsed }: CollapseProps) => {
  const [height, setHeight] = useState<number | undefined>(undefined)
  const [expanded, setExpanded] = useState<boolean>(
    collapsed !== undefined ? !collapsed : false
  )

  const { height: rawHeight, ref: collapseRef } = useResizeDetector()

  useEffect(() => {
    if (expanded) setHeight(rawHeight)
  }, [rawHeight])

  useEffect(() => {
    if (collapseRef.current && height === undefined) {
      setHeight((collapseRef.current as HTMLDivElement).offsetHeight)
    }
  }, [
    (() => {
      return collapseRef.current
    })()
  ])

  useEffect(() => {
    if (collapsed === true) {
      setTimeout(() => {
        setExpanded(false)
      }, 100)
    }
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
        ref={collapseRef as React.RefObject<HTMLDivElement>}
      >
        {children}
      </CollapseContainer>
    ),
    height: height,
    collapseRef: collapseRef
  }
}
