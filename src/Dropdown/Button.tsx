import { Button } from '../Button'

import { Dropdown, DropdownProps } from './Dropdown'

import React, { useState, useRef } from 'react'
import { composeRef } from 'rc-util/lib/ref'

export interface ButtonDropdownProps extends DropdownProps {}

const ButtonDropdown = React.forwardRef<HTMLButtonElement, ButtonDropdownProps>(
  ({ overlay, children, ...props }, ref) => {
    const [visible, setVisible] = useState<boolean>(false)
    const [width, setWidth] = useState<number>()
    const buttonRef = useRef<HTMLButtonElement>(null)

    const handleVisibleChange = (flag: boolean) => {
      setVisible(flag)
    }

    if (buttonRef.current && !width) {
      setWidth(buttonRef.current.offsetWidth)
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
        <Button
          ref={composeRef<HTMLButtonElement>(buttonRef, ref)}
          dropdown={visible}
          {...props}
        >
          {children}
        </Button>
      </Dropdown>
    )
  }
)

export default ButtonDropdown
