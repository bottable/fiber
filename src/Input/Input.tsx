import { MergeElementProps } from '../utils'

import {
  SmallInput,
  MediumInput,
  LargeInput,
  TableSpan,
  Addon,
  Fix,
  InputSpan,
  BlockSpan
} from './styles'

import React from 'react'

export type InputProps = MergeElementProps<
  'input',
  {
    size?: 'sm' | 'md' | 'lg'
    addonBefore?: React.ReactNode
    addonAfter?: React.ReactNode
    prefix?: React.ReactNode
    suffix?: React.ReactNode
    addon?: {} | null | undefined
    fix?: {} | null | undefined
  }
>

const Input = React.forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    const { size, prefix, suffix, ...rest } = props
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

    const addon = addonBefore || addonAfter

    let input = (
      <StyledInput {...rest} ref={ref} addon={addon} fix={prefix || suffix} />
    )

    const addonBeforeNode = addonBefore && (
      <Addon size={size}>{addonBefore}</Addon>
    )
    const addonAfterNode = addonAfter && <Addon size={size}>{addonAfter}</Addon>

    const prefixNode = prefix && <Fix size={size}>{prefix}</Fix>
    const suffixNode = suffix && <Fix size={size}>{suffix}</Fix>

    if (prefix || suffix) {
      input = (
        <InputSpan {...rest} addon={addon} size={size}>
          {prefixNode}
          {input}
          {suffixNode}
        </InputSpan>
      )
    }

    if (addon) {
      return (
        <BlockSpan>
          <TableSpan>
            {addonBeforeNode}
            {input}
            {addonAfterNode}
          </TableSpan>
        </BlockSpan>
      )
    }
    return input
  }
)

export { Input }
