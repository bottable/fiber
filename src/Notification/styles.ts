import { NotificationProps } from './Notification'

import styled, { keyframes } from 'styled-components'
import { rem } from 'polished'

const slideInAnimation = keyframes`
  from {
    right: ${rem('-336px')};
  } to {
    right: ${rem('16px')};
  }
`

export const StyledNotification = styled.div<NotificationProps>`
  position: fixed;
  z-index: 100;
  right: ${rem('16px')};
  max-width: ${rem('336px')};
  padding: ${({ theme }) => `${theme.paddings.md} ${theme.paddings.lg}`};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.md};
  ${({ theme }) => theme.boxShadow}
  ${({ theme }) => theme.transition}
  animation: ${slideInAnimation} 0.1s linear 1;
`

export const MessageStyle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.strong};
`

export const DescriptionStyle = styled.div`
  margin-top: ${({ theme }) => theme.margins.sm};
`

export const CloseContainer = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.paddings.xs};
  right: ${({ theme }) => theme.paddings.xs};
  cursor: pointer;

  svg {
    width: ${rem('16px')};
    height: ${rem('16px')};
  }
`
