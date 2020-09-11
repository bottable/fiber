import { useState, useEffect } from 'react'

export type ControlProps = {
  value: unknown
  defaultValue?: unknown
  onChange?: (newValue: unknown) => unknown
  sideEffect?: (newValue: unknown) => void
}

export const useControl = ({
  value: valueProps,
  defaultValue,
  onChange,
  sideEffect
}: ControlProps) => {
  const [value, setStateValue] = useState<unknown>(defaultValue)

  useEffect(() => {
    if (valueProps !== undefined) {
      setValue(valueProps)
    }
  }, [valueProps])

  const updateValue = (newValue: unknown) => {
    if (onChange) {
      newValue = onChange(newValue) || newValue
    }
    if (valueProps === undefined) {
      setValue(newValue)
    }
  }

  const setValue = (newValue: unknown) => {
    setStateValue(newValue)
    if (sideEffect) sideEffect(newValue)
  }

  return { value, setValue: updateValue }
}
