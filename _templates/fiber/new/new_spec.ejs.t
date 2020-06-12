---
to: src/<%=h.inflection.classify(component)%>/__test__/<%=  h.inflection.classify(component)  %>.spec.tsx
---

import { <%=h.inflection.classify(component)%> } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('<%=h.inflection.classify(component)%>', () => {
  it('renders correctly', () => {
    const <%=h.changeCase.camel(h.inflection.classify(component))%> = render(
      <<%=h.inflection.classify(component)%> />
    )

    expect(<%=h.changeCase.camel(h.inflection.classify(component))%>).toMatchSnapshot()
  })
})
