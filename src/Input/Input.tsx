import { MergeElementProps } from '../utils'

import { BaseInput } from './styles'

import React from 'react'

export type InputProps = MergeElementProps<
  'input',
  {
    variant?: String
  }
>

const Input = React.forwardRef((props: InputProps, ref: any) => {
  return <BaseInput {...props} ref={ref} />
})

export { Input }
