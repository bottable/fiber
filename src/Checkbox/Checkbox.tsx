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
      onChange: onChangeProps,
      style,
      disabled,
      ...props
    },
    ref
  ) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChangeProps) onChangeProps(e)
      console.log(e.target.checked)
      return e.target.checked
    }

    const { value: checked, setValue: setChecked } = useControl({
      value: checkedProps,
      defaultValue: defaultChecked,
      onChange: onChange as (newValue: unknown) => unknown
    }) as {
      value: boolean
      setValue: (event: React.ChangeEvent<HTMLInputElement>) => void
    }

    const CheckboxNode = (
      <CheckboxContainer>
        <CheckboxInput
          type='Checkbox'
          checked={checked}
          onChange={setChecked}
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
