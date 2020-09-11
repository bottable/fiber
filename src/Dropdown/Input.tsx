import { Input, InputProps } from '../Input'
import { useControl } from '../hooks'

import { Dropdown, DropdownProps } from './Dropdown'

import React, { useState, useRef } from 'react'
import { composeRef } from 'rc-util/lib/ref'

export interface InputDropdownProps extends DropdownProps {
  input?: InputProps
}

const InputDropdown = React.forwardRef<HTMLInputElement, InputDropdownProps>(
  (
    { children, visible: visibleProps, onVisibleChange, input, ...props },
    ref
  ) => {
    const { value: visible, setValue: setVisible } = useControl({
      value: visibleProps,
      defaultValue: false,
      onChange: onVisibleChange as (newValue: unknown) => unknown
    }) as { value: boolean; setValue: (newValue: boolean) => void }

    const [width, setWidth] = useState<number>()
    const inputRef = useRef<HTMLInputElement>(null)

    if (inputRef.current && !width) {
      setWidth(inputRef.current.offsetWidth)
    }

    return (
      <Dropdown
        width={width}
        topped
        trigger='click'
        visible={visible}
        onVisibleChange={setVisible}
        {...props}
      >
        <Input
          ref={composeRef<HTMLInputElement>(inputRef, ref)}
          dropdown={visible}
          {...input}
        >
          {children}
        </Input>
      </Dropdown>
    )
  }
)

export default InputDropdown
