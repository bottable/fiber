---
to: docs/<%=h.changeCase.lower(category)%>/<%=h.changeCase.camel(h.inflection.classify(component))%>.mdx
---
---
name: <%=h.inflection.classify(component)%>
route: /<%=h.changeCase.lower(category)%>/<%=h.changeCase.lower(component)%>
menu:  <%=h.capitalize(category)%>
---

import { <%=h.inflection.classify(component)%> } from 'fiber'
import { Playground } from 'docz'

# <%=h.inflection.classify(component)%>

<Playground>
  <<%=h.inflection.classify(component)%>> <%=h.inflection.classify(component)%> </<%=h.inflection.classify(component)%>>
</Playground>

