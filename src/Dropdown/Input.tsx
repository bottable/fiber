import { Input } from '../Input'

import { DropdownProps, Dropdown } from './Dropdown'

import React, { useState, useRef } from 'react'
import { composeRef } from 'rc-util/lib/ref'

export interface InputDropdownProps extends DropdownProps {
  style?: object
}

const InputDropdown = React.forwardRef<HTMLInputElement, InputDropdownProps>(
  ({ overlay, style, ...props }, ref) => {
    const [expand, setExpand] = useState<boolean>(false)
    const [width, setWidth] = useState<number>()
    const inputRef = useRef<HTMLInputElement>(null)

    const handleFocus = () => {
      setExpand(true)
    }

    const collapse = () => {
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
        trigger='click'
        collapse={collapse}
      >
        <Input
          ref={composeRef<HTMLInputElement>(inputRef, ref)}
          onFocus={handleFocus}
          style={style}
          dropdown={expand}
          {...props}
        />
      </Dropdown>
    )
  }
)

export default InputDropdown
