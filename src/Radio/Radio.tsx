import {
  Wrapper,
  RadioContainer,
  LabelContainer,
  RadioInput,
  StyledRadio
} from './styles'

import React, { FC, useState, useEffect } from 'react'

export type RadioProps = {
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  style?: object
}

type RadioFC<P> = FC<P> & {
  Group?: FC<P>
  Button?: FC<P>
}

const Radio: RadioFC<RadioProps> = React.forwardRef<
  HTMLInputElement,
  RadioProps
>(({ children, checked: checkedProps, onChange, style, ...props }, ref) => {
  const [checked, setChecked] = useState<boolean>(Boolean(checkedProps))

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
    <RadioContainer>
      <RadioInput
        type='radio'
        checked={checked}
        onChange={handleChange}
        {...props}
        ref={ref}
      />
      <StyledRadio checked={checked} />
    </RadioContainer>
  )

  const labelNode = React.Children.count(children) ? (
    <LabelContainer>{children}</LabelContainer>
  ) : null

  return (
    <Wrapper style={style}>
      {radioNode}
      {labelNode}
    </Wrapper>
  )
})

export { Radio }
