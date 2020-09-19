import { wrapper, dropdown, CollapseProps, CollapseContainer } from '../styles'

import { DropdownProps } from './Dropdown'

import styled, { css } from 'styled-components'
import { rem } from 'polished'

interface DropdownStyleProps extends CollapseProps, DropdownProps {}

const verticalPadding = css`
  padding: ${({ theme }) => `${theme.radii.md}`} 0;
`

export const Wrapper = styled.div`
  ${wrapper}
`

export const DropdownWrapper = styled(CollapseContainer)<DropdownStyleProps>`
  ${dropdown}
  ${({ placement }) => {
    let output = ''
    if (!placement) return null

    if (placement.includes('bottom')) output += '\ntop: 100%;'
    else output += '\nbottom: 100%;'

    if (placement.includes('Right')) output += '\nright: 0;'
    return output
  }}
  ${({ visible }) => (visible ? verticalPadding : null)} 
  width: ${({ width }) => (width ? rem(`${width}px`) : null)};
  min-width: ${({ width }) => (width ? 0 : null)};
  border-top-left-radius: ${({ topped }) => (topped ? 0 : null)};
  border-top-right-radius: ${({ topped }) => (topped ? 0 : null)};
  ${({ theme }) => theme.boxShadow}
`

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.gray6};
  text-align: center;
`
