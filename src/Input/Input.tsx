import { MergeElementProps } from '../utils'

import { SmallInput, MediumInput, LargeInput } from './styles'

import React from 'react'

export type InputProps = MergeElementProps<
  'input',
  {
    size?: 'sm' | 'md' | 'lg'
  }
>

const Input = React.forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, ...rest } = props

    let StyledInput

    switch (size) {
      case 'sm':
        StyledInput = SmallInput
        break
      case 'lg':
        StyledInput = LargeInput
        break
      default:
        StyledInput = MediumInput
        break
    }

    return <StyledInput {...rest} ref={ref} />
  }
)

export { Input }
