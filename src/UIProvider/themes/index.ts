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

// TODO: Write a better version of this...

const blueTheme = {
  ...blue,
  ...misc
}

const greenTheme = {
  ...green,
  ...misc
}

const magentaTheme = {
  ...magenta,
  ...misc
}

const neutralTheme = {
  ...neutral,
  ...misc
}

const orangeTheme = {
  ...orange,
  ...misc
}

const purpleTheme = {
  ...purple,
  ...misc
}

const redTheme = {
  ...red,
  ...misc
}

const tealTheme = {
  ...teal,
  ...misc
}

const yellowTheme = {
  ...yellow,
  ...misc
}

export default {
  blue: blueTheme,
  green: greenTheme,
  magenta: magentaTheme,
  neutral: neutralTheme,
  orange: orangeTheme,
  purple: purpleTheme,
  red: redTheme,
  teal: tealTheme,
  yellow: yellowTheme
}

export type ThemeType = typeof blueTheme
