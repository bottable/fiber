import { useGroup, GroupProps as BaseGroupProps } from '../hooks'

import { StyledGroup } from './styles'

import React, { FC } from 'react'

export type GroupProps = {
  children?: React.ReactElement | React.ReactElement[]
  disabled?: boolean
} & BaseGroupProps

const Group: FC<GroupProps> = ({
  children,
  onChange,
  value: valueProps,
  defaultValue,
  disabled,
  ...props
}) => {
  const { value, handleChange } = useGroup({
    onChange,
    value: valueProps,
    defaultValue,
    type: 'checkbox'
  })

  let childrenNode
  const childProps: { disabled?: boolean } = {}
  if (typeof disabled === 'boolean') childProps.disabled = disabled
  if (children) {
    if (Array.isArray(children)) {
      const childrenArray = children as React.ReactElement[]
      childrenNode = []
      for (let idx = 0; idx < childrenArray.length; idx++) {
        const child = childrenArray[idx]
        const checked = value.includes(child.props.value.toString())
        childrenNode.push(
          React.cloneElement(child, {
            checked: checked,
            key: idx,
            ...childProps
          })
        )
      }
    } else {
      childrenNode = React.cloneElement(children, {
        checked: children.props.value === value,
        ...childProps
      })
    }
  }

  return (
    <StyledGroup onChange={handleChange} {...props}>
      {childrenNode}
    </StyledGroup>
  )
}

export default Group
