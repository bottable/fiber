import { Button, ButtonProps } from '../Button'
import { useControl } from '../hooks'

import { Dropdown, DropdownProps } from './Dropdown'

import React, { useState, useRef } from 'react'
import { composeRef } from 'rc-util/lib/ref'

export interface ButtonDropdownProps extends DropdownProps {
  button?: ButtonProps
}

const ButtonDropdown = React.forwardRef<HTMLButtonElement, ButtonDropdownProps>(
  (
    { children, visible: visibleProps, onVisibleChange, button, ...props },
    ref
  ) => {
    const { value: visible, setValue: setVisible } = useControl({
      value: visibleProps,
      defaultValue: false,
      onChange: onVisibleChange as (newValue: unknown) => unknown
    }) as { value: boolean; setValue: (newValue: boolean) => void }

    const [width, setWidth] = useState<number>()
    const buttonRef = useRef<HTMLButtonElement>(null)

    if (buttonRef.current && !width) {
      setWidth(buttonRef.current.offsetWidth)
    }

    return (
      <Dropdown
        width={width}
        topped
        trigger='click'
        visible={visible}
        onVisibleChange={(flag: boolean) => {
          setVisible(flag)
        }}
        {...props}
      >
        <Button
          ref={composeRef<HTMLButtonElement>(buttonRef, ref)}
          dropdown={visible}
          {...button}
        >
          {children}
        </Button>
      </Dropdown>
    )
  }
)

export default ButtonDropdown
