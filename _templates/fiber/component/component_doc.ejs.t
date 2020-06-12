---
to: docs/component/<%=h.changeCase.camel(h.inflection.classify(component))%>.mdx
---

---
name: <%=h.inflection.classify(component)%>
route: /component/<%=h.changeCase.camel(h.inflection.classify(component))%>
menu: Component
---

import { <%=h.inflection.classify(component)%> } from 'fiber'
import { Playground } from 'docz'

# <%=h.inflection.classify(component)%>

<Playground>
  <<%=h.inflection.classify(component)%>> <%=h.inflection.classify(component)%> </<%=h.inflection.classify(component)%>>
</Playground>

