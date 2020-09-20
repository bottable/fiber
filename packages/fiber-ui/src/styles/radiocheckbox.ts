import styled from 'styled-components'

type RadioCheckboxProps = {
  disabled?: boolean
}

export const RadioCheckboxWrapper = styled.label<RadioCheckboxProps>`
  display: inline-block;
  position: relative;
  padding: 0;
  color: ${({ theme }) => theme.colors.gray7};
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

export const RadioCheckboxContainer = styled.span`
  display: inline-block;
  top: 0;
  margin: 0;
  outline: none;
  vertical-align: sub;
`

export const RadioCheckboxLabelContainer = styled.span`
  padding-right: ${({ theme }) => theme.paddings.xs};
  padding-left: ${({ theme }) => theme.paddings.xs};
  vertical-align: top;
`

export const RadioCheckboxStyledGroup = styled.div`
  display: inline-block;
  label {
    margin-right: ${({ theme }) => theme.margins.xs};
  }
`

export const RadioCheckboxInput = styled.input`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`
