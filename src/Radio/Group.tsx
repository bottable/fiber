import { StyledGroup } from './styles'

import React, { FC, useState, useEffect } from 'react'

export type GroupProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  children?: React.ReactElement | React.ReactElement[]
}

const Group: FC<GroupProps> = ({
  children,
  onChange,
  value: valueProps,
  ...props
}) => {
  const [value, setValue] = useState<string>()

  useEffect(() => {
    if (typeof valueProps === 'string') setValue(valueProps)
  }, [valueProps])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof valueProps !== 'string') setValue(e.target.value)
    if (onChange) onChange(e)
  }

  let childrenNode
  if (children) {
    if (Array.isArray(children)) {
      const childrenArray = children as React.ReactElement[]
      childrenNode = childrenArray.map(
        (child: React.ReactElement, idx: number) =>
          React.cloneElement(child, {
            checked: child.props.value.toString() === value,
            key: idx
          })
      )
    } else {
      childrenNode = React.cloneElement(children, {
        checked: children.props.value === value
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
