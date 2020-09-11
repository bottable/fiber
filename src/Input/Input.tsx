import { MergeElementProps } from '../utils'
import { useControl } from '../hooks'

import { Password } from './Password'
import { Search } from './Search'
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

import React, { useRef } from 'react'
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
    value?: string
    defaultValue?: string
    style?: React.CSSProperties & object
  }
>

// TO DO: Find a proper way to type this
type InputFC = any

const Input: InputFC = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const {
      size,
      prefix,
      suffix,
      button,
      onChange: onChangeProps,
      onPressEnter,
      onKeyDown,
      onFocus,
      onBlur,
      value: valueProps,
      defaultValue,
      style,
      ...rest
    } = props
    const { addonBefore, addonAfter } = props

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChangeProps) onChangeProps(e)
      return e.target.value
    }

    const { value, setValue } = useControl({
      value: valueProps,
      defaultValue,
      onChange: onChange as (newValue: unknown) => unknown
    }) as {
      value: string
      setValue: (newValue: React.ChangeEvent<HTMLInputElement>) => void
    }

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
        ref={composeRef<HTMLInputElement>(inputRef, ref)}
        onChange={setValue}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        fix={fix}
        value={value}
        style={!fix ? style : undefined}
        {...rest}
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
          style={style}
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
  }
)

Input.Password = Password
Input.Search = Search

Input.defaultProps = {
  defaultValue: ''
}

export { Input }
