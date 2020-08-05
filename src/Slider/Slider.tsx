import { StyledSlider, Thumb, Track, Rail } from './styles'

import React, { FC } from 'react'

export type SliderProps = {
  defaultValue?: number
  value?: number
  min?: number
  max?: number
}

const Slider: FC<SliderProps> = (props) => {
  const sliderRef = React.useRef<HTMLDivElement>(null)
  const thumbRef = React.useRef<HTMLDivElement>(null)
  const trackRef = React.useRef<HTMLDivElement>(null)

  const getPercentage = (current: number, max: number) => (100 * current) / max

  const getLeft = (percentage: number) => `calc(${percentage}% - 5px)`

  const handleMouseMove = (event: MouseEvent) => {
    if (!thumbRef.current || !sliderRef.current || !trackRef.current) return
    let newX = event.clientX - sliderRef.current.getBoundingClientRect().left

    const end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth

    const start = 0

    if (newX < start) newX = 0

    if (newX > end) newX = end

    const newPercentage = getPercentage(newX, end)

    thumbRef.current.style.left = getLeft(newPercentage)
    trackRef.current.style.width = `${newPercentage}%`
  }

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp)
    document.removeEventListener('mousemove', handleMouseMove)
  }

  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <StyledSlider {...props} ref={sliderRef} onMouseDown={handleMouseDown}>
      <Rail />
      <Track ref={trackRef} />
      <Thumb ref={thumbRef} />
    </StyledSlider>
  )
}

export { Slider }
