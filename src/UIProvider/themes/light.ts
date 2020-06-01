import { rem } from 'polished'

const colors = {
  // primary
  primary: '#0e9aa7',
  primaryDark: '#0b6c75',
  primaryDark2: '#06393d',
  primaryLight: '#1ec4d4',
  primaryLight2: '#86e6f0',

  // secondary
  secondary: '#1b6ca8',
  secondaryLight: '#6db1e3',
  secondaryDark: '#0c4d7d',

  dark: '#000000',
  light: '#ffffff',

  // gray
  gray100: '#eee',
  gray200: '#ccc',
  gray300: '#aaa',
  gray400: '#888',
  gray500: '#666',
  gray600: '#444',
  gray700: '#222',
  gray800: '#000',

  // status
  success: '##40B3A1',
  danger: '#e27d5f',
  warning: '##E8A87C',
  info: '#85CDC9',
  error: '#e27d5f'
}

const fontSizes = {
  sm: rem('12px'),
  md: rem('14px'),
  lg: rem('16px')
}

const space = {
  0: rem('0px'),
  1: rem('4px'),
  2: rem('8px'),
  3: rem('16px'),
  4: rem('32px'),
  5: rem('64px'),
  6: rem('128px'),
  7: rem('256px')
}

const paddings = {
  xs: rem('8px'),
  sm: rem('12px'),
  md: rem('16px'),
  lg: rem('20px')
}

const heights = {
  sm: rem('20px'),
  md: rem('28px'),
  lg: rem('36px')
}

const radii = {
  sm: rem('2px'),
  md: rem('4px'),
  lg: rem('8px'),
  xl: rem('16px')
}

const transition = 'transition: all 100ms ease;'

const border = {
  md: '1px solid',
  lg: '2px solid',
  dashed: '1px dashed'
}

// TODO: Shadows

export default {
  colors,
  fontSizes,
  space,
  paddings,
  heights,
  radii,
  transition,
  border
}
