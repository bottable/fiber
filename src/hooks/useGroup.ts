import { useState, useEffect } from 'react'

export type GroupProps = {
  onChange?: (event: any) => void
  value?: string | string[]
  defaultValue?: string | string[]
  type: 'checkbox' | 'radio'
}

export const useGroup = ({
  onChange,
  value: valueProps,
  defaultValue,
  type
}: GroupProps) => {
  const [value, setValue] = useState<string | string[]>(
    defaultValue || (type === 'radio' ? '' : [])
  )

  useEffect(() => {
    if (Array.isArray(valueProps) || typeof valueProps === 'string') {
      setValue(valueProps)
    }
  }, [valueProps])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      (e.target.type !== 'checkbox' && e.target.type !== 'radio') ||
      e.target.value === 'head'
    ) {
      return
    }

    if (type === 'checkbox' && typeof value !== 'string') {
      let newValue: string[]
      if (value.includes(e.target.value)) {
        newValue = value.filter(
          (checkboxValue) => checkboxValue !== e.target.value
        )
      } else {
        newValue = [...value, e.target.value]
      }
      if (!Array.isArray(valueProps)) {
        setValue(newValue)
      }
      if (onChange) onChange(newValue)
    } else {
      if (typeof valueProps !== 'string') setValue(e.target.value)
      if (onChange) onChange(e)
    }
  }

  return { value, setValue, handleChange }
}
