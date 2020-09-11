import { useControl } from './useControl'

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
  const { value, setValue } = useControl({
    value: valueProps,
    defaultValue
  }) as {
    value: string | string[]
    setValue: (newValue: string | string[]) => void
  }

  const handleChange = (e: any) => {
    if (e.target.type !== 'checkbox' && e.target.type !== 'radio') {
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
      setValue(newValue)
      if (onChange) onChange(newValue)
    } else {
      setValue(e.target.value)
      if (onChange) onChange(e)
    }
  }

  return { value, setValue, handleChange }
}
