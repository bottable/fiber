import { Tag as BaseTag } from '../Tag'

import { TagInputSpan, TagInput } from './styles'

import React, { useState } from 'react'

export type TagProps = {}

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
      if (e.keyCode === 13 && value.length !== 0) {
        addTag()
      }
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
        style={{ marginTop: 7, marginBottom: 7 }}
      >
        {value}
      </BaseTag>
    ))

    return (
      <TagInputSpan>
        {prefixNode}
        <TagInput
          onKeyDown={handleKeyDown}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          ref={ref}
          {...props}
        />
      </TagInputSpan>
    )
  }
)

export { Tag }
