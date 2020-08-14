import {
  Wrapper,
  RadioContainer,
  LabelContainer,
  RadioInput,
  StyledRadio
} from './styles'

import React, { FC } from 'react'

export type RadioProps = {
  // custom props here
}

const Radio: FC<RadioProps> = ({ children, ...props }) => {
  const radioNode = (
    <RadioContainer>
      <RadioInput type='radio' />
      <StyledRadio />
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
