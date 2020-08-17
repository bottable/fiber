import {
  Wrapper,
  CheckboxContainer,
  LabelContainer,
  CheckboxInput,
  StyledCheckbox
} from './styles'
import { GroupProps } from './Group'

import React, { FC, useState, useEffect } from 'react'

export type CheckboxProps = {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  style?: object
  disabled?: boolean
}

type CheckboxFC<P> = FC<P> & {
  Group?: FC<GroupProps>
}

const Checkbox: CheckboxFC<CheckboxProps> = React.forwardRef<
  HTMLInputElement,
  CheckboxProps
>(
  (
    {
      children,
      checked: checkedProps,
      defaultChecked,
      onChange,
      style,
      disabled,
      ...props
    },
    ref
  ) => {
    const [checked, setChecked] = useState<boolean>(Boolean(defaultChecked))

    useEffect(() => {
      if (typeof checkedProps === 'boolean') setChecked(checkedProps)
    }, [checkedProps])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof checkedProps !== 'boolean') setChecked(e.target.checked)
      if (onChange) {
        onChange(e)
      }
    }

    const CheckboxNode = (
      <CheckboxContainer>
        <CheckboxInput
          type='Checkbox'
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          {...props}
          ref={ref}
        />
        <StyledCheckbox checked={checked} disabled={disabled} />
      </CheckboxContainer>
    )

    const labelNode = React.Children.count(children) ? (
      <LabelContainer>{children}</LabelContainer>
    ) : null

    return (
      <Wrapper style={style} disabled={disabled}>
        {CheckboxNode}
        {labelNode}
      </Wrapper>
    )
  }
)

export { Checkbox }
