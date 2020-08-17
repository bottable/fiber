import { StyledCheckbox } from './styles'

import React, { FC } from 'react'

export type CheckboxProps = {
  // custom props here
}

const Checkbox: FC<CheckboxProps> = ({ ...props }) => {
  return <StyledCheckbox {...props} type='checkbox' />
}

export { Checkbox }
