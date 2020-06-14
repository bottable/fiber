import { StyleProps } from '../utils/styles'

import { StyledCodegenSample } from './styles'

import React, { FC } from 'react'
// import styled, { css } from 'styled-components'

export interface CodegenSampleProps extends StyleProps {
  // custom props here
}

const CodegenSample: FC<CodegenSampleProps> = ({ children, ...props }) => {
  return <StyledCodegenSample {...props}>{children}</StyledCodegenSample>
}

export { CodegenSample }
