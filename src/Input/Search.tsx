import { Input, InputProps } from './Input'

import React from 'react'
import { composeRef } from 'rc-util/lib/ref'
import { MdSearch } from 'react-icons/md'

export interface SearchProps extends InputProps {
  onSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void
  searchIcon?: React.ReactElement
}

const Search = React.forwardRef(
  (props: SearchProps, ref: React.Ref<HTMLInputElement>) => {
    const inputRef = React.useRef<HTMLInputElement>(null)

    const { onSearch: onSearchProps, searchIcon, ...rest } = props

    const { disabled } = props

    const onSearch = (
      e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (disabled) return

      if (onSearchProps) return onSearchProps(inputRef.current?.value!, e)
    }

    const getIcon = () => {
      let icon: React.ReactElement

      if (searchIcon) icon = searchIcon
      else {
        icon = <MdSearch style={{ color: '#595959' }} />
      }

      const iconProps = {
        onClick: onSearch,
        style: { cursor: 'pointer', ...icon.props.style }
      }

      return React.cloneElement(icon, iconProps)
    }

    return (
      <Input
        ref={composeRef<HTMLInputElement>(inputRef, ref)}
        onPressEnter={onSearch}
        prefix={getIcon()}
        button
        {...rest}
      />
    )
  }
)

export { Search }
