import { useGroup, GroupProps as BaseGroupProps } from '../hooks'

import { StyledGroup } from './styles'

import React, { FC } from 'react'

export type GroupProps = {
  children?: React.ReactElement | React.ReactElement[]
  buttonStyle?: 'default' | 'solid'
  disabled?: boolean
} & BaseGroupProps

const Group: FC<GroupProps> = ({
  children,
  onChange,
  value: valueProps,
  defaultValue,
  buttonStyle,
  disabled,
  ...props
}) => {
  const { value, handleChange } = useGroup({
    onChange,
    value: valueProps,
    defaultValue,
    type: 'radio'
  })

  let childrenNode
  const childProps: { buttonStyle?: string; disabled?: boolean } = {}
  if (typeof buttonStyle === 'string') childProps.buttonStyle = buttonStyle
  if (typeof disabled === 'boolean') childProps.disabled = disabled
  if (children) {
    if (Array.isArray(children)) {
      const childrenArray = children as React.ReactElement[]
      childrenNode = []
      let n
      let checkedDisabled
      for (let idx = 0; idx < childrenArray.length; idx++) {
        const child = childrenArray[idx]
        const checked = child.props.value.toString() === value
        if (checked) {
          n = idx + 1
          checkedDisabled = child.props.disabled
        }
        childrenNode.push(
          React.cloneElement(child, {
            checked: checked,
            key: idx,
            postChecked: idx === n && !checkedDisabled && !disabled,
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

Group.defaultProps = {
  type: 'radio'
}

export default Group
