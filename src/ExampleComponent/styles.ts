import styled, { StyledComponent, DefaultTheme } from 'styled-components'
import { SpaceProps, HeightProps, space, height } from 'styled-system'

export const StyledBlock: StyledComponent<
  'div',
  DefaultTheme,
  SpaceProps & HeightProps,
  never
> = styled.div<SpaceProps & HeightProps>`
  position: relative;
  margin: 2em;
  padding: 0.5em;
  border: 2px solid #000;
  font-size: 2em;
  text-align: center;

  ${space};
  ${height};
`
