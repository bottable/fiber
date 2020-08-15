import { NotificationProps } from './Notification'

import styled from 'styled-components'
import { rem } from 'polished'

export const StyledNotification = styled.div<NotificationProps>`
  position: fixed;
  z-index: 100;
  right: ${({ theme }) => theme.margins.md};
  max-width: ${rem('336px')};
  padding: ${({ theme }) => `${theme.paddings.md} ${theme.paddings.lg}`};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.md};
  ${({ theme }) => theme.boxShadow}
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
