import { ExampleComponentProps } from './ExampleComponent'

import styled from 'styled-components'
import { space, height } from 'styled-system'

export const StyledBlock = styled.div<ExampleComponentProps>`
  position: relative;
  margin: 2em;
  padding: 0.5em;
  border: 2px solid #000;
  background-color: ${(props) => props.background};
  color: ${(props) => props.theme.colors.base};
  font-size: 2em;
  text-align: center;

  ${space};
  ${height};
`
