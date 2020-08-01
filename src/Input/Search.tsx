import { Button } from '../'

import { Input, InputProps } from './'
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

    const {
      onChange: customOnChange,
      onSearch: customOnSearch,
      addonAfter,
      enterButton,
      ...rest
    } = props

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e && e.target && e.type === 'click' && customOnSearch) {
        customOnSearch(
          (e as React.ChangeEvent<HTMLInputElement>).target.value,
          e
        )
      }
      if (customOnChange) {
        customOnChange(e)
      }
    }

    const onSearch = (
      e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>
    ) => {
      const { disabled } = props

      if (disabled) return

      if (customOnSearch) return customOnSearch(inputRef.current?.value!, e)
    }

    const renderAddonAfter = () => {
      const { disabled, size } = props

      if (!enterButton) return addonAfter

      const button = (
        <Button
          type='primary'
          size={size}
          disabled={disabled}
          onClick={onSearch}
          addon
        >
          {enterButton === true ? <SearchIcon /> : enterButton}
        </Button>
      )

      return button
    }

    return (
      <Input
        ref={composeRef<HTMLInputElement>(inputRef, ref)}
        onPressEnter={onSearch}
        addonAfter={renderAddonAfter()}
        onChange={onChange}
        button
        {...rest}
      />
    )
  }
)

Search.displayName = 'Search'

export default Search
