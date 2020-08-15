import { NotificationProps } from './Notification'

import styled from 'styled-components'

export const StyledNotification = styled.div<NotificationProps>`
  position: absolute;
  z-index: 1;
  top: ${({ theme }) => theme.margins.md};
  right: ${({ theme }) => theme.margins.md};
  padding: ${({ theme }) => theme.paddings.md};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.md};
`

export const MessageStyle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.strong};
`

export const DescriptionStyle = styled.div`
  margin-top: ${({ theme }) => theme.margins.sm};
`
