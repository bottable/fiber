import { StyledGroup } from './styles'

import React, { FC, useState, useEffect } from 'react'

export type GroupProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  children?: React.ReactElement | React.ReactElement[]
  defaultValue?: string
  buttonStyle?: 'default' | 'solid'
}

const Group: FC<GroupProps> = ({
  children,
  onChange,
  value: valueProps,
  defaultValue,
  buttonStyle,
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
  if (children) {
    if (Array.isArray(children)) {
      const childrenArray = children as React.ReactElement[]
      childrenNode = []
      let n
      for (let idx = 0; idx < childrenArray.length; idx++) {
        const child = childrenArray[idx]
        const checked = child.props.value.toString() === value
        if (checked) n = idx + 1
        childrenNode.push(
          React.cloneElement(child, {
            checked: checked,
            key: idx,
            postChecked: idx === n,
            buttonStyle: buttonStyle
          })
        )
      }
    } else {
      childrenNode = React.cloneElement(children, {
        checked: children.props.value === value,
        buttonStyle: buttonStyle
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
