import { rem } from 'polished'

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

export { fontSizes, space, paddings, heights, radii, transition, border }