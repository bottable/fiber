import { MergeElementProps } from '../utils'

import {
  PrimaryButton,
  DefaultButton,
  DashedButton,
  TextButton,
  LinkButton,
  RippleSpan
} from './styles'

import React, {
  MouseEventHandler,
  forwardRef,
  useRef,
  useState,
  useEffect
} from 'react'
import { rem } from 'polished'

type Shape = 'default' | 'circle' | 'round'

export type ButtonProps = MergeElementProps<
  'button',
  {
    disabled?: boolean
    ghost?: boolean
    htmlType?: 'submit' | 'button' | 'reset' | undefined
    icon?: React.ReactElement
    loading?: boolean | { delay: number }
    shape?: Shape
    size?: 'sm' | 'md' | 'lg'
    target?: string
    type?: 'primary' | 'default' | 'dashed' | 'text' | 'link'
    onClick?: MouseEventHandler<HTMLElement>
    block?: boolean
    children?: React.ReactNode
    className?: string
  }
>

export type RippleProps = {
  x: number
  y: number
  width: number
  top: number
  right: number
  bottom: number
  left: number
  shape?: Shape
}

const Button = forwardRef((props: ButtonProps, ref: any) => {
  const { children, type, onClick, icon, ...rest } = props

  let StyledButton

  switch (type) {
    case 'primary':
      StyledButton = PrimaryButton
      break
    case 'dashed':
      StyledButton = DashedButton
      break
    case 'text':
      StyledButton = TextButton
      break
    case 'link':
      StyledButton = LinkButton
      break
    default:
      StyledButton = DefaultButton
      break
  }

  const [ripples, setRipples] = useState<React.ReactNode[]>([])

  const prevRipplesRef = useRef<React.ReactNode[]>()
  useEffect(() => {
    prevRipplesRef.current = ripples
  })

  // eslint-disable-next-line react-hooks/rules-of-hooks
  if (!ref) ref = useRef<HTMLButtonElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) (onClick as React.MouseEventHandler<HTMLButtonElement>)(e)
  }

  const handleMouseDown = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const clientRect = ref.current.getBoundingClientRect()

    let top, right, bottom, left

    if (rest.shape === 'circle') {
      top = right = bottom = left = ref.current.offsetHeight / 2
    } else {
      top = e.clientY - clientRect.top
      right = clientRect.right - e.clientX
      bottom = clientRect.bottom - e.clientY
      left = e.clientX - clientRect.left
    }
    const x = ref.current.offsetLeft + left
    const y = ref.current.offsetTop + top

    const newRipples = [
      ...prevRipplesRef.current!,
      <RippleSpan
        x={x}
        y={y}
        top={top}
        right={right}
        bottom={bottom}
        left={left}
        shape={rest.shape}
        width={ref.current.offsetWidth * 2}
        onAnimationEnd={() => {
          setRipples(prevRipplesRef.current?.slice(1)!)
        }}
        key={`${new Date().getTime()}`}
      />
    ]

    setRipples(newRipples)
  }

  const iconStyle = {
    height: rest.size === 'lg' ? rem('19px') : rem('18px')
  }

  return (
    <StyledButton
      ref={ref}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      {...rest}
    >
      {ripples}
      {icon ? <icon.type style={iconStyle} /> : null}
      {children}
    </StyledButton>
  )
})

export { Button }
