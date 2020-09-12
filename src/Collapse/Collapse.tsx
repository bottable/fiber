import { useControl } from '../hooks'

import { StyledCollapse } from './styles'
import { Panel, PanelProps } from './Panel'

import React, { FC } from 'react'

export type CollapseProps = {
  children: React.ReactElement | React.ReactElement[]
  activeKey: string[]
  defaultActiveKey: string[]
  onChange: (key: string[]) => void
}

type CollapseFC<P> = FC<P> & {
  Panel: React.FC<PanelProps>
}

const Collapse: CollapseFC<CollapseProps> = ({
  children,
  activeKey: activeKeyProps,
  defaultActiveKey: defaultActiveKeyProps,
  onChange,
  ...props
}) => {
  const { value: activeKey, setValue: setActiveKey } = useControl({
    value: activeKeyProps,
    defaultValue: defaultActiveKeyProps,
    onChange: onChange as (newValue: unknown) => unknown
  }) as { value: string[]; setValue: (newValue: string[]) => void }

  const handlePanelChange = (newKey: string) => {
    let newActiveKey: string[]
    if (activeKey.includes(newKey)) {
      newActiveKey = activeKey.filter((key) => key !== newKey)
    } else {
      newActiveKey = [...activeKey, newKey]
    }
    setActiveKey(newActiveKey)
  }

  let childrenNode
  if (children) {
    if (Array.isArray(children)) {
      const childrenArray = children as React.ReactElement[]
      childrenNode = childrenArray.map((child: React.ReactElement, idx) => {
        const key = (child.key || idx.toString()) as string

        return React.cloneElement(child, {
          collapsed: !activeKey.includes(key),
          panelKey: key,
          onChange: handlePanelChange
        })
      })
    } else {
      const key = (children.key || '1') as string

      return React.cloneElement(children, {
        collapsed: !activeKey.includes(key),
        panelKey: key,
        onChange: handlePanelChange
      })
    }
  }

  return <StyledCollapse {...props}>{childrenNode}</StyledCollapse>
}

Collapse.defaultProps = {
  defaultActiveKey: []
}

Collapse.Panel = Panel

export { Collapse }
