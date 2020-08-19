---
to: src/<%=  h.inflection.classify(component)  %>/styles.ts
---

import { <%=h.inflection.classify(component)%>Props } from './<%=h.inflection.classify(component)%>'

import styled from 'styled-components'

export const Styled<%=h.inflection.classify(component)%> = styled.<%=element%>< <%=h.inflection.classify(component)%>Props >``
