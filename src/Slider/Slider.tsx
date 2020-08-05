import { StyledSlider, Thumb, Track, Rail } from './styles'

import React, { FC, useState, useEffect } from 'react'

export type SliderProps = {
  defaultValue?: number
  value?: number
  min?: number
  max?: number
  step?: number
  onChange?: (value: number) => void
  hover?: boolean
  focus?: boolean
  disabled?: boolean
}

const Slider: FC<SliderProps> = (props) => {
  const { onChange, ...rest } = props
  const { defaultValue, min, max, step, value: valueProps, disabled } = props

  useEffect(() => {
    if (valueProps) updateValue(0, valueProps)
  }, [valueProps])

  const [hover, setHover] = useState<boolean>(false)
  const [focus, setFocus] = useState<boolean>(false)

  const sliderRef = React.useRef<HTMLDivElement>(null)
  const thumbRef = React.useRef<HTMLDivElement>(null)
  const trackRef = React.useRef<HTMLDivElement>(null)
  const valueRef = React.useRef<number>(valueProps! | defaultValue!)

  const getPercentage = (current: number, min: number, max: number) =>
    (100 * (current - min)) / (max - min)

  const getLeft = (percentage: number) => `calc(${percentage}% - 5px)`

  const getValue = (
    percentage: number,
    min: number,
    max: number,
    step: number
  ) => {
    const rawValue = ((max - min) / 100) * percentage + min
    return Math.round(rawValue / step) * step
  }

  const handleMouseMove = (event: MouseEvent) => {
    updateValue(event.clientX)
  }

  const handleMouseUp = () => {
    setFocus(false)
    document.removeEventListener('mouseup', handleMouseUp)
    document.removeEventListener('mousemove', handleMouseMove)
  }

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (disabled) return
    setFocus(true)
    updateValue(event.clientX)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const updateValue = (clientX: number, x?: number) => {
    if (!thumbRef.current || !sliderRef.current || !trackRef.current) return
    let newPercentage = 0
    if (!x) {
      let newX = clientX - sliderRef.current.getBoundingClientRect().left

      const end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth

      const start = 0

      if (newX < start) newX = 0

      if (newX > end) newX = end

      newPercentage = getPercentage(newX, start, end)
      x = getValue(newPercentage, min!, max!, step!)
    }
    newPercentage = getPercentage(x, min!, max!)

    const newValue = getValue(newPercentage, min!, max!, step!)

    if (newValue === valueRef.current) return

    valueRef.current = newValue

    if (!valueProps) {
      thumbRef.current.style.left = getLeft(newPercentage)
      trackRef.current.style.width = `${newPercentage}%`
    }

    if (onChange) {
      onChange(newValue)
    }
  }

  const initialPercentage = getPercentage(
    valueProps! | defaultValue!,
    min!,
    max!
  )

  return (
    <StyledSlider
      {...rest}
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      hover={hover}
      focus={focus}
    >
      <Rail />
      <Track
        ref={trackRef}
        style={{ width: `${initialPercentage}%` }}
        disabled={disabled}
      />
      <Thumb
        ref={thumbRef}
        style={{ left: getLeft(initialPercentage) }}
        focus={focus}
        disabled={disabled}
      />
    </StyledSlider>
  )
}

Slider.defaultProps = {
  min: 0,
  max: 100,
  defaultValue: 0,
  step: 1
}

export { Slider }
