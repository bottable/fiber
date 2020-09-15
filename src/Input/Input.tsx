import { MergeElementProps } from '../utils'
import { useControl } from '../hooks'
import { Size } from '../types'

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
    size?: Size
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
      value: valueProps,
      defaultValue,
      style,
      disabled,
      addonBefore,
      addonAfter,
      ...rest
    } = props

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

    const fix = Boolean(prefix || suffix)

    let input = (
      <StyledInput
        ref={composeRef<HTMLInputElement>(inputRef, ref)}
        onChange={setValue}
        onKeyDown={handleKeyDown}
        fix={fix}
        value={value}
        style={!fix ? style : undefined}
        disabled={disabled}
        addonBefore={Boolean(addonBefore)}
        addonAfter={Boolean(addonAfter)}
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
          disabled={disabled}
          addonBefore={Boolean(addonBefore)}
          addonAfter={Boolean(addonAfter)}
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

Input.defaultProps = {
  defaultValue: ''
}

export { Input }
