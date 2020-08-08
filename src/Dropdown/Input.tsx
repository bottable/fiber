import { Input } from '../Input'

import { DropdownProps, Dropdown } from './Dropdown'

import React, { useState, useRef } from 'react'
import { composeRef } from 'rc-util/lib/ref'

export interface InputDropdownProps extends DropdownProps {}

const InputDropdown = React.forwardRef<HTMLInputElement, InputDropdownProps>(
  ({ overlay, ...props }, ref) => {
    const [expand, setExpand] = useState<boolean>(false)
    const [width, setWidth] = useState<number>()
    const inputRef = useRef<HTMLInputElement>(null)

    const handleExpandChange = (flag: boolean) => {
      setExpand(flag)
    }

    if (inputRef.current && !width) {
      setWidth(inputRef.current.offsetWidth)
    }

    return (
      <Dropdown
        overlay={overlay}
        expand={expand}
        width={width}
        topped
        trigger='click'
        onExpandChange={handleExpandChange}
      >
        <Input
          ref={composeRef<HTMLInputElement>(inputRef, ref)}
          dropdown={expand}
          {...props}
        />
      </Dropdown>
    )
  }
)

export default InputDropdown
