import { Input } from '../Input'

import { DropdownProps, Dropdown } from './Dropdown'

import React, { useState } from 'react'
import { composeRef } from 'rc-util/lib/ref'

export interface InputDropdownProps extends DropdownProps {
  style?: object
}

const InputDropdown = React.forwardRef<HTMLInputElement, InputDropdownProps>(
  ({ overlay, style, ...props }, ref) => {
    const [expand, setExpand] = useState<boolean>(false)
    const [width, setWidth] = useState<number>()
    const inputRef = React.useRef<HTMLInputElement>(null)

    const handleFocus = () => {
      setExpand(true)
    }

    const handleBlur = () => {
      setExpand(false)
    }

    if (inputRef.current && !width) {
      setWidth(inputRef.current.offsetWidth)
    }

    return (
      <Dropdown
        overlay={overlay}
        expand={expand}
        width={width}
        dropdown
        {...props}
      >
        <Input
          ref={composeRef<HTMLInputElement>(inputRef, ref)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={style}
          dropdown={expand}
        />
      </Dropdown>
    )
  }
)

export default InputDropdown
