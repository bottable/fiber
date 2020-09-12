import styled, { keyframes } from 'styled-components'
import { rem } from 'polished'

export type RippleStyleProps = {
  x: number
  y: number
  width: number
}

const rippleAnimation = ({ width }: RippleStyleProps) => {
  return keyframes`
    from {
      width: 0;
      height: 0;
      opacity: 0.5;
    }
    to {
      width: ${rem(`${width}px`)};
      height: ${rem(`${width}px`)};
      opacity: 0;
    }
`
}

export const RippleSpan = styled.span<RippleStyleProps>`
  position: absolute;
  top: ${({ y }) => rem(`${y}px`)};
  left: ${({ x }) => rem(`${x}px`)};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gray7};
  transform: translate(-50%, -50%);
  animation: ${rippleAnimation} 0.5s linear 1;
  pointer-events: none;
`
