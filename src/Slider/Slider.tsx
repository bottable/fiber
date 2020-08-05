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
  vertical?: boolean
}

const Slider: FC<SliderProps> = (props) => {
  const { onChange, ...rest } = props
  const {
    defaultValue,
    min,
    max,
    step,
    value: valueProps,
    disabled,
    vertical
  } = props

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

  const getTop = (percentage: number) => `calc(${100 - percentage}% - 5px)`

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
    updateValue(vertical ? event.clientY : event.clientX)
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
    updateValue(vertical ? event.clientY : event.clientX)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const updateValue = (clientCoord: number, coord?: number) => {
    if (!thumbRef.current || !sliderRef.current || !trackRef.current) return
    let newPercentage = 0
    if (!coord) {
      let newCoord = vertical
        ? sliderRef.current.getBoundingClientRect().bottom - clientCoord
        : clientCoord - sliderRef.current.getBoundingClientRect().left

      const end =
        sliderRef.current[vertical ? 'offsetHeight' : 'offsetWidth'] -
        thumbRef.current[vertical ? 'offsetHeight' : 'offsetWidth']

      const start = 0

      if (newCoord < start) newCoord = 0

      if (newCoord > end) newCoord = end

      newPercentage = getPercentage(newCoord, start, end)
      coord = getValue(newPercentage, min!, max!, step!)
    }
    newPercentage = getPercentage(coord, min!, max!)

    const newValue = getValue(newPercentage, min!, max!, step!)

    if (newValue === valueRef.current) return

    valueRef.current = newValue

    if (!valueProps) {
      thumbRef.current.style[vertical ? 'top' : 'left'] = vertical
        ? getTop(newPercentage)
        : getLeft(newPercentage)
      trackRef.current.style[
        vertical ? 'height' : 'width'
      ] = `${newPercentage}%`
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

  const trackInitialStyle = {}
  trackInitialStyle[vertical ? 'height' : 'width'] = `${initialPercentage}%`

  const thumbInitialStyle = {}
  thumbInitialStyle[vertical ? 'top' : 'left'] = vertical
    ? getTop(initialPercentage)
    : getLeft(initialPercentage)

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
      <Rail vertical={vertical} />
      <Track
        ref={trackRef}
        style={trackInitialStyle}
        disabled={disabled}
        vertical={vertical}
      />
      <Thumb
        ref={thumbRef}
        style={thumbInitialStyle}
        focus={focus}
        disabled={disabled}
        vertical={vertical}
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
