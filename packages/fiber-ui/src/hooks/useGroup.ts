import { useControl } from './useControl'

export type GroupProps = {
  onChange?: (event: any) => void
  value?: string | string[]
  defaultValue?: string | string[]
  type: 'checkbox' | 'radio'
}

export const useGroup = ({
  onChange: onChangeProps,
  value: valueProps,
  defaultValue,
  type
}: GroupProps) => {
  const onChange = (e: React.FormEvent<HTMLInputElement> | string[]) => {
    if (type === 'checkbox') {
      if (onChangeProps) onChangeProps(e)
      return e
    } else {
      e = e as React.FormEvent<HTMLInputElement>
      if (onChangeProps) onChangeProps(e)
      return (e.target as HTMLInputElement).value
    }
  }

  const { value, setValue } = useControl({
    value: valueProps,
    defaultValue,
    onChange: onChange as (newValue: unknown) => unknown
  }) as {
    value: string | string[]
    setValue: (newValue: React.FormEvent<HTMLInputElement> | string[]) => void
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement

    if (target.type !== 'checkbox' && target.type !== 'radio') {
      return
    }

    if (type === 'checkbox' && typeof value !== 'string') {
      let newValue: string[]
      if (value.includes(target.value)) {
        newValue = value.filter(
          (checkboxValue) => checkboxValue !== target.value
        )
      } else {
        newValue = [...value, target.value]
      }
      setValue(newValue)
    } else {
      setValue(e)
    }
  }

  return { value, setValue, handleChange }
}
