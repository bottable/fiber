import { Tag as BaseTag } from '../Tag'
import { useControl } from '../hooks'

import { TagInputSpan, TagInput } from './styles'

import React, { useState } from 'react'

export type TagProps = {
  placeholder?: string
  defaultValue?: string[]
  onChange?: (newValue: string[]) => void
  tagProps?: object | ((value: string) => void)
  style?: React.CSSProperties & object
}

type Tag = { value: string; repeat: boolean; close?: boolean }

const Tag = React.forwardRef(
  (
    { placeholder, defaultValue, onChange, tagProps, style }: TagProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const [tags, setTags] = useState<Tag[]>(
      defaultValue
        ? defaultValue.map((value) => ({ value, repeat: false }))
        : []
    )
    const [value, setValue] = useState<string>('')

    const { setValue: setValues } = useControl({
      value: undefined,
      defaultValue: defaultValue,
      onChange: onChange as (newValue: unknown) => unknown
    }) as { setValue: (newValue: string[]) => void }

    const addTag = () => {
      if (value.length === 0) return
      const repeat =
        tags.find(({ value: tagValue }) => tagValue === value) !== undefined
      const newTag: Tag = { value, repeat }
      if (repeat) {
        newTag.repeat = true
        setTimeout(() => {
          shrinkTag(newTag)
        }, 1000)
      }
      setTags((prevTags) => {
        const newTags = [...prevTags, newTag]
        if (!repeat) setValues(newTags.map(({ value }) => value))
        return newTags
      })
      setValue('')
    }

    const shrinkTag = (shrinkTag: Tag) => {
      let newTag: Tag
      setTags((prevTags) =>
        prevTags.map((tag) => {
          if (shrinkTag === tag) {
            newTag = { ...tag, close: true }
            return newTag
          } else return tag
        })
      )
      setTimeout(() => {
        closeTag(newTag)
      }, 100)
    }

    const closeTag = (closeTag: Tag) => {
      setTags((prevTags) => {
        const newTags = prevTags.filter((tag) => tag !== closeTag)
        if (!closeTag.repeat) setValues(newTags.map(({ value }) => value))
        return newTags
      })
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 13 && value.length !== 0) {
        addTag()
      }
      if (e.keyCode === 8 && value.length === 0 && tags.length !== 0) {
        const tag = tags[tags.length - 1]
        const { repeat, close } = tag
        if (repeat || close) return
        shrinkTag(tag)
      }
    }

    const prefixNode = tags.map((tag, idx) => {
      const { value, repeat, close } = tag
      let props = {}
      if (typeof tagProps === 'function') {
        props = tagProps(value)
      } else if (typeof tagProps === 'object') {
        props = tagProps
      }

      return (
        <BaseTag
          closable
          onClose={(e: React.MouseEvent) => {
            e.preventDefault()
            if (repeat || close) return
            shrinkTag(tag)
          }}
          key={idx}
          style={{ marginTop: 7, marginBottom: 7 }}
          color={repeat ? 'red' : undefined}
          shrink={close}
          {...props}
        >
          {value}
        </BaseTag>
      )
    })

    return (
      <TagInputSpan style={style}>
        {prefixNode}
        <TagInput
          onKeyDown={handleKeyDown}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          placeholder={placeholder}
          ref={ref}
        />
      </TagInputSpan>
    )
  }
)

export { Tag }
