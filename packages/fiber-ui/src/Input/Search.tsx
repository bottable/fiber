import { Button } from '../Button'

import { Input, InputProps } from './Input'

import React from 'react'
import { composeRef } from 'rc-util/lib/ref'
import SearchIcon from '@material-ui/icons/Search'

export interface SearchProps extends InputProps {
  onSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void
  enterButton?: React.ReactNode
}

const Search = React.forwardRef(
  (props: SearchProps, ref: React.Ref<HTMLInputElement>) => {
    const inputRef = React.useRef<HTMLInputElement>(null)

    const { onSearch: onSearchProps, addonAfter, enterButton, ...rest } = props

    const { disabled, size } = props

    const onSearch = (
      e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (disabled) return

      if (onSearchProps) return onSearchProps(inputRef.current?.value!, e)
    }

    const renderAddonAfter = () => {
      if (!enterButton) return addonAfter

      const button = (
        <Button
          type='primary'
          size={size}
          disabled={disabled}
          onClick={onSearch}
          addon
        >
          <SearchIcon />
        </Button>
      )

      return button
    }

    return (
      <Input
        ref={composeRef<HTMLInputElement>(inputRef, ref)}
        onPressEnter={onSearch}
        addonAfter={renderAddonAfter()}
        button
        {...rest}
      />
    )
  }
)

export { Search }
