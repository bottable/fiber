---
to: src/<%=h.inflection.classify(component)%>/<%=  h.inflection.classify(component)  %>.tsx
---

import { StyleProps } from '../utils/styles'

import { Styled<%=h.inflection.classify(component)%> } from './styles'

import React, { FC } from 'react'

export interface <%=h.inflection.classify(component)%>Props extends StyleProps {
  // custom props here
}

const <%=h.inflection.classify(component)%>: FC<<%=h.inflection.classify(component)%>Props> = ({
  children,
  ...props
}) => {
  return (
    <Styled<%=h.inflection.classify(component)%> {...props}>
      {children}
    </Styled<%=h.inflection.classify(component)%>>
  )
}

export { <%=h.inflection.classify(component)%> }
