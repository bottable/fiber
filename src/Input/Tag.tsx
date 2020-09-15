import { Tag as BaseTag } from '../Tag'

import { Input, InputProps } from './Input'

import React, { useState } from 'react'

export interface TagProps extends InputProps {}

const Tag = React.forwardRef(
  (props: TagProps, ref: React.Ref<HTMLInputElement>) => {
    const [tags, setTags] = useState<string[]>([])
    const [value, setValue] = useState<string>('')

    const addTag = () => {
      if (tags.indexOf(value) !== -1 || value.length === 0) return
      setTags((prevTags) => [...prevTags, value])
      setValue('')
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 8 && value.length === 0) {
        setTags((prevTags) => prevTags.slice(0, prevTags.length - 1))
      }
    }

    const prefixNode = tags.map((value, idx) => (
      <BaseTag
        closable
        onClose={(e: React.MouseEvent) => {
          e.preventDefault()
          setTags((prevTags) =>
            prevTags.filter((tagValue) => value !== tagValue)
          )
        }}
        key={idx}
      >
        {value}
      </BaseTag>
    ))

    return (
      <Input
        prefix={prefixNode}
        ref={ref}
        onPressEnter={addTag}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        onKeyDown={handleKeyDown}
        {...props}
      />
    )
  }
)

export { Tag }
