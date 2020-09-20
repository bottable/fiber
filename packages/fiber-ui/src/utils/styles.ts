import {
  compose,
  space,
  color,
  typography,
  height,
  SpaceProps,
  ColorProps,
  TypographyProps
} from 'styled-system'

export const styleComposition = compose(space, height, color, typography)

export type StyleProps = SpaceProps & ColorProps & TypographyProps
