# 🧸 FiberUI

> An opinionated React UI Component library

[![NPM](https://img.shields.io/npm/v/fiber.svg)](https://www.npmjs.com/package/fiber-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

### Install Peer Dependancies

```bash
yarn add react react-dom styled-components styled-system styled-normalize react-icons
```

### Load the Works Sans font:

Add this to your HTML head

```html
<link
  href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
  rel="stylesheet"
/>
```

or download `typeface-work-sans` and type `require('typeface-work-sans')` in your project's entry file.

### Install package

```bash
yarn add fiber-ui
```

## Usage

### Wrap your React project with our UIProvider.

example:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { UIProvider } from 'fiber-ui'

ReactDOM.render(
  <React.StrictMode>
    <UIProvider>
      <App />
    </UIProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
```

## Development

```bash
# install dependencies
yarn

# run demo at root directory
yarn start

```

#### Create a component

```bash
yarn hygen fiber new
```

```
> What's your new member called?
> codegen_sample
> What's your category does it belong ex. component, layout ...etc?
> example
> What's your base HTML element?
> h2

Loaded templates: _templates
       added: src/CodegenSample/index.ts
      inject: src/index.tsx
       added: docs/sample/codegenSample.mdx
       added: src/CodegenSample/__test__/CodegenSample.spec.tsx
       added: src/CodegenSample/CodegenSample.tsx
       added: src/CodegenSample/styles.ts
✨  Done in 10.06s.
```

> Be sure to run `yarn test -u` after to create a new snapshot

## License

MIT © [bottable](https://github.com/bottable)
