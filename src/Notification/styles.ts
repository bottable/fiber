import { NotificationProps } from './Notification'

import styled, { css, keyframes } from 'styled-components'
import { rem } from 'polished'

const slideInRightAnimation = keyframes`
  from {
    right: ${rem('-336px')};
  } to {
    right: ${rem('16px')};
  }
`

const slideInLeftAnimation = keyframes`
  from {
    left: ${rem('-336px')};
  } to {
    left: ${rem('16px')};
  }
`

const rightStyle = css`
  right: ${rem('16px')};
  animation: ${slideInRightAnimation} 0.1s linear 1;
`

const leftStyle = css`
  left: ${rem('16px')};
  animation: ${slideInLeftAnimation} 0.1s linear 1;
`

export const StyledNotification = styled.div<NotificationProps>`
  position: fixed;
  z-index: 100;
  max-width: ${rem('336px')};
  padding: ${({ theme }) => `${theme.paddings.md} ${theme.paddings.lg}`};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.md};
  ${({ theme }) => theme.boxShadow}
  ${({ theme }) => theme.transition}
  ${({ placement }) => (placement!.includes('Right') ? rightStyle : leftStyle)}
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
