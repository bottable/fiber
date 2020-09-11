import { useState, useEffect } from 'react'

export type ControlProps = {
  value: unknown
  defaultValue?: unknown
  updateValue?: (newValue: unknown) => void
}

export const useControl = ({
  value: valueProps,
  defaultValue,
  updateValue: updateValueProps
}: ControlProps) => {
  const [value, setValue] = useState<unknown>(defaultValue)

  useEffect(() => {
    if (valueProps !== undefined) {
      changeValue(valueProps)
    }
  }, [valueProps])

  const updateValue = (newValue: unknown) => {
    if (valueProps === undefined) {
      changeValue(newValue)
    }
  }

  const changeValue = (newValue: unknown) => {
    if (updateValueProps) updateValueProps(newValue)
    setValue(newValue)
  }

  return { value, setValue: updateValue }
}
