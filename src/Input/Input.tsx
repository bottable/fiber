import { MergeElementProps } from '../utils'

import {
  SmallInput,
  MediumInput,
  LargeInput,
  StyledSpan,
  Addon
} from './styles'

import React from 'react'

export type InputProps = MergeElementProps<
  'input',
  {
    size?: 'sm' | 'md' | 'lg'
    addonBefore?: React.ReactNode
    addonAfter?: React.ReactNode
    span?: {} | null | undefined
  }
>

const Input = React.forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, ...rest } = props
    const { addonBefore, addonAfter } = props

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

    const span = addonBefore || addonAfter

    const input = <StyledInput {...rest} ref={ref} span={span} />

    const addonBeforeNode = addonBefore && (
      <Addon {...props}>{addonBefore}</Addon>
    )
    const addonAfterNode = addonAfter && <Addon {...props}>{addonAfter}</Addon>

    if (span) {
      return (
        <StyledSpan {...props}>
          {addonBeforeNode}
          {input}
          {addonAfterNode}
        </StyledSpan>
      )
    }
    return input
  }
)

export { Input }
