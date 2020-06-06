import { SpaceComponentProps } from './Space'

import styled from 'styled-components'
import { space, height } from 'styled-system'

export const StyledBlock = styled.div<SpaceComponentProps>`
  display: inline-block;
  position: relative;
  margin: 0.5em;
  padding: 0.5em;

  ${space};
  ${height};
`
