import { useControl } from '../hooks'

import {
  Wrapper,
  RadioContainer,
  LabelContainer,
  RadioInput,
  StyledRadio
} from './styles'
import { GroupProps } from './Group'

import React, { FC } from 'react'

export type RadioProps = {
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  style?: object
  disabled?: boolean
  value?: string
}

type RadioFC<P> = FC<P> & {
  Group?: FC<GroupProps>
  Button?: FC<P>
}

const Radio: RadioFC<RadioProps> = React.forwardRef<
  HTMLInputElement,
  RadioProps
>(
  (
    {
      children,
      checked: checkedProps,
      onChange: onChangeProps,
      style,
      disabled,
      ...props
    },
    ref
  ) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChangeProps) onChangeProps(e)
      return e.target.checked
    }

    const { value: checked, setValue: setChecked } = useControl({
      value: checkedProps,
      defaultValue: false,
      onChange: onChange as (newValue: unknown) => unknown
    }) as {
      value: boolean
      setValue: (event: React.ChangeEvent<HTMLInputElement>) => void
    }

    const radioNode = (
      <RadioContainer>
        <RadioInput
          type='radio'
          checked={checked}
          onChange={setChecked}
          disabled={disabled}
          {...props}
          ref={ref}
        />
        <StyledRadio checked={checked} disabled={disabled} />
      </RadioContainer>
    )

    const labelNode = React.Children.count(children) ? (
      <LabelContainer>{children}</LabelContainer>
    ) : null

    return (
      <Wrapper style={style} disabled={disabled}>
        {radioNode}
        {labelNode}
      </Wrapper>
    )
  }
)

export { Radio }
