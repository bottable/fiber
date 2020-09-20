import { NotificationProps } from './Notification'

import styled, { css, keyframes } from 'styled-components'
import { rem } from 'polished'

const slideInRightAnimation = keyframes`
  from {
    right: ${rem('-336px')};
    opacity: 0;
  } to {
    right: ${rem('16px')};
    opacity: 1;
  }
`

const slideInLeftAnimation = keyframes`
  from {
    left: ${rem('-336px')};
    opacity: 0;
  } to {
    left: ${rem('16px')};
    opacity: 1;
  }
`

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
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

const centerStyle = css`
  left: 50%;
  transform: translate(-50%, 0);
  animation: ${fadeInAnimation} 0.1s linear 1;
`

export const StyledNotification = styled.div<NotificationProps>`
  position: fixed;
  z-index: 100;
  max-width: ${rem('336px')};
  padding: ${({ theme }) => theme.paddings.lg};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors.gray7};
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.md};
  ${({ theme }) => theme.boxShadow}
  ${({ theme }) => theme.transition}
  ${({ placement }) => {
    if (placement!.includes('Right')) {
      return rightStyle
    } else if (placement!.includes('Center')) {
      return centerStyle
    } else {
      return leftStyle
    }
  }}
`

export const MessageStyle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const DescriptionStyle = styled.div`
  &:not(:first-child) {
    margin-top: ${({ theme }) => theme.margins.sm};
  }
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
