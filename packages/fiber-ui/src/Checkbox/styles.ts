import { CheckboxProps } from './Checkbox'

import styled, { css } from 'styled-components'

const disabledStyle = css`
  border-color: ${({ theme }) => theme.colors.gray5};
  background-color: ${({ theme }) => theme.colors.gray2};

  &::after {
    border-color: ${({ theme }) => theme.colors.gray5};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray5};
  }
`

export const StyledCheckbox = styled.span<CheckboxProps>`
  display: block;
  position: relative;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.space[3]};
  height: ${({ theme }) => theme.space[3]};
  border: ${({ theme }) => theme.border.lg};
  border-radius: ${({ theme }) => theme.radii.md};
  border-color: ${({ checked, theme }) =>
    checked ? theme.colors.base : theme.colors.gray8};
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.base : null};
  ${({ theme }) => theme.transition}

  &:hover {
    border-color: ${({ theme }) => theme.colors.base};
  }

  &::after {
    content: ' ';
    display: table;
    position: absolute;
    top: 50%;
    left: 22%;
    width: 5.71428571px;
    height: 9.14285714px;
    border: ${({ theme }) => theme.border.lg} #fff;
    border-top: 0;
    border-left: 0;
    opacity: ${({ checked }) => (checked ? 1 : 0)};
    transform: rotate(45deg) scale(1) translate(-50%, -50%);
    ${({ theme }) => theme.transition}
  }

  ${({ disabled }) => (disabled ? disabledStyle : null)}
`

export {
  RadioCheckboxWrapper as Wrapper,
  RadioCheckboxLabelContainer as LabelContainer,
  RadioCheckboxContainer as CheckboxContainer,
  RadioCheckboxInput as CheckboxInput,
  RadioCheckboxStyledGroup as StyledGroup
} from '../styles'
