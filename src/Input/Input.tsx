import { MergeElementProps } from '../utils'

import Password from './Password'
import Search from './Search'
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

import React, { FC } from 'react'
import { composeRef } from 'rc-util/lib/ref'

export type InputProps = MergeElementProps<
  'input',
  {
    size?: 'sm' | 'md' | 'lg'
    onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>
    addonBefore?: React.ReactNode
    addonAfter?: React.ReactNode
    prefix?: React.ReactNode
    suffix?: React.ReactNode
    fix?: boolean
    bordered?: boolean
    disabled?: boolean
    button?: boolean
    dropdown?: boolean
  }
>

type InputFC<P> = FC<P> & {
  Password?: FC<P>
  Search?: FC<P>
}

const Input: InputFC<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const {
    size,
    prefix,
    suffix,
    button,
    onChange,
    onPressEnter,
    onKeyDown,
    onFocus,
    onBlur,
    ...rest
  } = props
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e)
    }
    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) {
      onFocus(e)
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e)
    }
  }

  const fix = Boolean(prefix || suffix)

  let input = (
    <StyledInput
      {...rest}
      ref={composeRef<HTMLInputElement>(inputRef, ref)}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
      fix={fix}
    />
  )

  const addonBeforeNode = addonBefore && (
    <Addon size={size} button={button}>
      {addonBefore}
    </Addon>
  )
  const addonAfterNode = addonAfter && (
    <Addon size={size} button={button}>
      {addonAfter}
    </Addon>
  )

  const prefixNode = prefix && <Fix size={size}>{prefix}</Fix>
  const suffixNode = suffix && <Fix size={size}>{suffix}</Fix>

  if (fix) {
    input = (
      <InputSpan
        {...rest}
        size={size}
        onClick={() => inputRef.current?.focus()}
      >
        {prefixNode}
        {input}
        {suffixNode}
      </InputSpan>
    )
  }

  if (addonBefore || addonAfter) {
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
})

Input.Password = Password
Input.Search = Search

export { Input }
