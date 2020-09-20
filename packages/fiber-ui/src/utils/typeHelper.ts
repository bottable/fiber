export function withProperties<A, B>(component: A, properties: B): A & B {
  Object.keys(properties).forEach((key) => {
    // @ts-ignore
    component[key] = properties[key]
  })
  return component as A & B
}
