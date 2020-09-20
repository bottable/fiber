import {
  blue,
  green,
  magenta,
  neutral,
  orange,
  purple,
  red,
  teal,
  yellow
} from './colors'
import * as misc from './misc'

const theme = {
  blue: { colors: blue },
  green: { colors: green },
  magenta: { colors: magenta },
  neutral: { colors: neutral },
  orange: { colors: orange },
  purple: { colors: purple },
  red: { colors: red },
  teal: { colors: teal },
  yellow: { colors: yellow }
}

for (const [key, value] of Object.entries(theme)) {
  // @ts-ignore
  theme[key] = {
    colors: {
      ...value.colors,
      blue: blue,
      green: green,
      magenta: magenta,
      neutral: neutral,
      orange: orange,
      purple: purple,
      red: red,
      teal: teal,
      yellow: yellow
    },
    ...misc
  }
}

export default theme
