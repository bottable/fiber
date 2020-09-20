---
id: layout
title: Layout
---

This is for layout.

## Example

```js
import { Layout } from 'fiber-ui'
```

### Regular

```js live
function RegularLayout() {
  const headerStyle = {
    background: '#7dbcea',
    color: '#fff',
    textAlign: 'center'
  }
  const contentStyle = {
    background: 'rgba(16, 142, 233, 1)',
    color: '#fff',
    minHeight: 120,
    lineHeight: '120px',
    textAlign: 'center'
  }
  const footerStyle = {
    background: '#7dbcea',
    color: '#fff',
    lineHeight: '1.5',
    textAlign: 'center'
  }
  const siderStyle = {
    background: '#3ba0e9',
    color: '#fff',
    lineHeight: '120px',
    textAlign: 'center'
  }

  return (
    <>
      <Layout>
        <Layout.Header style={headerStyle}>Header</Layout.Header>
        <Layout.Content style={contentStyle}>Content</Layout.Content>
        <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
      </Layout>
      <Layout style={{ marginTop: 48 }}>
        <Layout.Header style={headerStyle}>Header</Layout.Header>
        <Layout>
          <Layout.Sider style={siderStyle}>Sider</Layout.Sider>
          <Layout.Content style={contentStyle}>Content</Layout.Content>
        </Layout>
        <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
      </Layout>
      <Layout style={{ marginTop: 48 }}>
        <Layout.Header style={headerStyle}>Header</Layout.Header>
        <Layout>
          <Layout.Content style={contentStyle}>Content</Layout.Content>
          <Layout.Sider style={siderStyle}>Sider</Layout.Sider>
        </Layout>
        <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
      </Layout>
      <Layout style={{ marginTop: 48 }}>
        <Layout.Sider style={siderStyle}>Sider</Layout.Sider>
        <Layout>
          <Layout.Header style={headerStyle}>Header</Layout.Header>
          <Layout.Content style={contentStyle}>Content</Layout.Content>
          <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
        </Layout>
      </Layout>
    </>
  )
}
```
