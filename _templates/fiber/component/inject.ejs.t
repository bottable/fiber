---
inject: true
to: src/index.tsx
after: \n
---
export * from './<%=h.inflection.classify(component)%>'