import {
  Wrapper,
  RadioContainer,
  LabelContainer,
  RadioInput,
  StyledRadio
} from './styles'

import React, { FC, useState } from 'react'

export type RadioProps = {
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Radio: FC<RadioProps> = ({
  children,
  checked: checkedProps,
  onChange,
  ...props
}) => {
  const [checked, setChecked] = useState<boolean>(Boolean(checkedProps))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
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
      />
      <StyledRadio checked={checked} />
    </RadioContainer>
  )

  const labelNode = React.Children.count(children) ? (
    <LabelContainer>{children}</LabelContainer>
  ) : null

  return (
    <Wrapper {...props}>
      {radioNode}
      {labelNode}
    </Wrapper>
  )
}

export { Radio }
