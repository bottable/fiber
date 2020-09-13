---
to: docs/<%=h.changeCase.lower(category.replace(' ', ''))%>/<%=h.changeCase.camel(h.inflection.classify(component))%>.mdx
---
---
name: <%=h.inflection.classify(component)%>
route: /<%=h.changeCase.lower(category.replace(' ', ''))%>/<%=h.changeCase.lower(component)%>
menu:  <%=category.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})%>
---

import { <%=h.inflection.classify(component)%> } from 'fiber'
import { Playground } from 'docz'

# <%=h.inflection.classify(component)%>

<Playground>
  <<%=h.inflection.classify(component)%>> <%=h.inflection.classify(component)%> </<%=h.inflection.classify(component)%>>
</Playground>

