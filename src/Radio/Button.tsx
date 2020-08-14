import { StyleProps } from '../Button'

import { RadioProps } from './Radio'
import { StyledRadioButton, RadioInput } from './styles'

import React, { FC, useState, useEffect } from 'react'

export interface ButtonProps extends RadioProps, StyleProps {
  postChecked?: boolean
}

const RadioButton: FC<ButtonProps> = React.forwardRef<
  HTMLInputElement,
  ButtonProps
>(
  (
    {
      children,
      checked: checkedProps,
      onChange,
      style,
      size,
      postChecked,
      ...props
    },
    ref
  ) => {
    const [checked, setChecked] = useState<boolean>(false)

    useEffect(() => {
      if (typeof checkedProps === 'boolean') setChecked(checkedProps)
    }, [checkedProps])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof checkedProps !== 'boolean') setChecked(e.target.checked)
      if (onChange) {
        onChange(e)
      }
    }

    const radioNode = (
      <RadioInput
        type='radio'
        checked={checked}
        onChange={handleChange}
        {...props}
        ref={ref}
      />
    )

    return (
      <StyledRadioButton
        checked={checked}
        size={size}
        postChecked={postChecked}
        style={{ marginRight: 0, ...style }}
      >
        {radioNode}
        {children}
      </StyledRadioButton>
    )
  }
)

export default RadioButton
