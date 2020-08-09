import { Button } from '../Button'

import { DropdownProps, Dropdown } from './Dropdown'

import React, { useState, useRef } from 'react'
import { composeRef } from 'rc-util/lib/ref'

export interface ButtonDropdownProps extends DropdownProps {}

const ButtonDropdown = React.forwardRef<HTMLButtonElement, ButtonDropdownProps>(
  ({ overlay, children, ...props }, ref) => {
    const [expand, setExpand] = useState<boolean>(false)
    const [width, setWidth] = useState<number>()
    const buttonRef = useRef<HTMLButtonElement>(null)

    const handleExpandChange = (flag: boolean) => {
      setExpand(flag)
    }

    if (buttonRef.current && !width) {
      setWidth(buttonRef.current.offsetWidth)
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
        <Button
          ref={composeRef<HTMLButtonElement>(buttonRef, ref)}
          dropdown={expand}
          {...props}
        >
          {children}
        </Button>
      </Dropdown>
    )
  }
)

export default ButtonDropdown
