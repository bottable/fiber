import { useControl } from '../hooks'

import {
  Wrapper,
  CheckboxContainer,
  LabelContainer,
  CheckboxInput,
  StyledCheckbox
} from './styles'
import { GroupProps } from './Group'

import React, { FC } from 'react'

export type CheckboxProps = {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  style?: object
  disabled?: boolean
  value?: string
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
    const { value: checked, setValue: setChecked } = useControl({
      value: checkedProps,
      defaultValue: defaultChecked
    }) as { value: boolean; setValue: (newValue: boolean) => void }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked)
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
