import { Input } from '../Input'

import { Dropdown, DropdownProps } from './Dropdown'

import React, { useState, useRef } from 'react'
import { composeRef } from 'rc-util/lib/ref'

export interface InputDropdownProps extends DropdownProps {}

const InputDropdown = React.forwardRef<HTMLInputElement, InputDropdownProps>(
  ({ overlay, ...props }, ref) => {
    const [visible, setVisible] = useState<boolean>(false)
    const [width, setWidth] = useState<number>()
    const inputRef = useRef<HTMLInputElement>(null)

    const handleVisibleChange = (flag: boolean) => {
      setVisible(flag)
    }

    if (inputRef.current && !width) {
      setWidth(inputRef.current.offsetWidth)
    }

    return (
      <Dropdown
        overlay={overlay}
        visible={visible}
        width={width}
        topped
        trigger='click'
        onVisibleChange={handleVisibleChange}
      >
        <Input
          ref={composeRef<HTMLInputElement>(inputRef, ref)}
          dropdown={visible}
          {...props}
        />
      </Dropdown>
    )
  }
)

export default InputDropdown
