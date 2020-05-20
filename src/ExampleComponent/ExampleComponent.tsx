import { StyledBlock } from './styles'

import React from 'react'

interface ExampleComponentProps {
  text: string
}

export const ExampleComponent = ({ text }: ExampleComponentProps) => {
  return <StyledBlock>Example Component: {text}</StyledBlock>
}
