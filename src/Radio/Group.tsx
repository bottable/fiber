import { StyledGroup } from './styles'

import React, { FC, useState, useEffect } from 'react'

export type GroupProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  children?: React.ReactElement | React.ReactElement[]
  defaultValue?: string
  buttonStyle?: 'default' | 'solid'
  disabled?: boolean
}

const Group: FC<GroupProps> = ({
  children,
  onChange,
  value: valueProps,
  defaultValue,
  buttonStyle,
  disabled,
  ...props
}) => {
  const [value, setValue] = useState<string>(defaultValue || '')

  useEffect(() => {
    if (typeof valueProps === 'string') setValue(valueProps)
  }, [valueProps])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type !== 'radio') return
    if (typeof valueProps !== 'string') setValue(e.target.value)
    if (onChange) onChange(e)
  }

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

export default Group
