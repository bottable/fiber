import { ButtonStyleProps } from '../styles'
import { useRipple, useControl } from '../hooks'

import { RadioProps } from './Radio'
import { StyledRadioButton, RadioInput } from './styles'

import React, { FC, useRef } from 'react'

export interface ButtonProps extends RadioProps, ButtonStyleProps {
  postChecked?: boolean
  buttonStyle?: 'default' | 'solid'
}

const RadioButton: FC<ButtonProps> = React.forwardRef<
  HTMLInputElement,
  ButtonProps
>(
  (
    {
      children,
      checked: checkedProps,
      onChange: onChangeProps,
      style,
      size,
      postChecked,
      buttonStyle,
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
      setValue: (newValue: React.ChangeEvent<HTMLInputElement>) => void
    }

    const buttonRef = useRef<HTMLLabelElement>(null)

    const { ripples, addRipple } = useRipple()

    const handleMouseDown = (
      event: React.MouseEvent<HTMLLabelElement, MouseEvent>
    ) => {
      if (!buttonRef.current || disabled) return

      addRipple({
        event,
        width: buttonRef.current.offsetWidth * 2
      })
    }

    const radioNode = (
      <RadioInput
        type='radio'
        checked={checked}
        onChange={setChecked}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    )

    return (
      <StyledRadioButton
        checked={checked}
        size={size}
        postChecked={postChecked}
        buttonStyle={buttonStyle}
        style={{ marginRight: 0, ...style }}
        disabled={disabled}
        onMouseDown={handleMouseDown}
        ref={buttonRef}
      >
        {ripples}
        {radioNode}
        {children}
      </StyledRadioButton>
    )
  }
)

export default RadioButton
