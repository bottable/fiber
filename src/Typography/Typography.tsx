import React, { FC } from 'react'
import styled, { ThemeProps, FlattenInterpolation } from 'styled-components'

export interface TypographyProps {
  children?: React.ReactNode
  accent?: FlattenInterpolation<ThemeProps<any>>
  component?: string
}

const Typography: FC<TypographyProps> = ({
  children,
  component,
  accent,
  ...props
}) => {
  const Component = component as any
  const StyledComponent = styled(Component)`
    ${accent}
  `
  return <StyledComponent {...props}>{children}</StyledComponent>
}

export default Typography
