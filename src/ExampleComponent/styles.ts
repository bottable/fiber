import { ExampleComponentProps } from './ExampleComponent'

import styled, { StyledComponent, DefaultTheme } from 'styled-components'
import { space, height } from 'styled-system'

export const StyledBlock: StyledComponent<
  'div',
  DefaultTheme,
  ExampleComponentProps,
  never
> = styled.div<ExampleComponentProps>`
  position: relative;
  margin: 2em;
  padding: 0.5em;
  border: 2px solid #000;
  background-color: ${(props) => props.background};
  color: ${(props) => props.theme.colors.primary};
  font-size: 2em;
  text-align: center;

  ${space};
  ${height};
`
