import { StyledGroup } from './styles'

import React, { FC, useState, useEffect } from 'react'

export type GroupProps = {
  onChange?: (value: string[]) => void
  value?: string[]
  children?: React.ReactElement | React.ReactElement[]
  defaultValue?: string[]
  disabled?: boolean
}

const Group: FC<GroupProps> = ({
  children,
  onChange,
  value: valueProps,
  defaultValue,
  disabled,
  ...props
}) => {
  const [value, setValue] = useState<string[]>(defaultValue || [])

  useEffect(() => {
    if (Array.isArray(valueProps)) setValue(valueProps)
  }, [valueProps])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type !== 'checkbox') return
    let newValue: string[]
    if (value.includes(e.target.value)) {
      newValue = value.filter(
        (checkboxValue) => checkboxValue !== e.target.value
      )
    } else {
      newValue = [...value, e.target.value]
    }
    if (!Array.isArray(valueProps)) {
      setValue(newValue)
    }
    if (onChange) onChange(newValue)
  }

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
