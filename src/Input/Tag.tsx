import { Tag as BaseTag } from '../Tag'

import { TagInputSpan, TagInput } from './styles'

import React, { useState } from 'react'

export type TagProps = {}

type Tag = { value: string; repeat: boolean; close?: boolean }

const Tag = React.forwardRef(
  (props: TagProps, ref: React.Ref<HTMLInputElement>) => {
    const [tags, setTags] = useState<Tag[]>([])
    const [value, setValue] = useState<string>('')

    const addTag = () => {
      if (value.length === 0) return
      const newTag: Tag = { value, repeat: false }
      if (
        tags.find(({ value: tagValue }) => tagValue === value) !== undefined
      ) {
        newTag.repeat = true
        setTimeout(() => {
          shrinkTag(newTag)
        }, 1000)
      }
      setTags((prevTags) => [...prevTags, newTag])
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
      setTags((prevTags) => prevTags.filter((tag) => tag !== closeTag))
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
        >
          {value}
        </BaseTag>
      )
    })

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
