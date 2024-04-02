# @ims-view/eslint-config [![npm](https://img.shields.io/npm/v/@ims-view/eslint-config.svg)](https://npmjs.com/package/@ims-view/eslint-config)

Flat ESLint config for JavaScript, TypeScript, Vue 2, Vue 3, Prettier.

[Legacy Version](https://github.com/eternallycyf/eslint-config-legacy)

## Features

- Format with Prettier.
- Designed to work with TypeScript, Vue 2 and 3 out-of-box.
- Support JSON(5), YAML, Markdown...
- Sort imports, `package.json`, `tsconfig.json`...
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), compose easily!
- Reasonable defaults, best practices, only one-line of config

## Install

```bash
npm i -D @ims-view/eslint-config
```

Require Node.js >= 18.18, and ESLint >= 8.56.0.

## Usage

```js
import { eternallycyf } from '@ims-view/eslint-config'
export default eternallycyf(
  [
    /* your custom config */
  ],
  // Features: it'll detect installed dependency and enable necessary features automatically
  {
    prettier: true,
    markdown: true,
    vue: true, // auto detection
    unocss: false, // auto detection
  },
)
```

### Presets

```js
// eslint.config.js
import {
  presetJavaScript, // Ignore common files and include javascript support
  presetJsonc, // Includes basic json(c) file support and sorting json keys
  presetLangsExtensions, // Includes markdown, yaml + `presetJsonc` support
  presetBasic, // Includes `presetJavaScript` and typescript support

  // Includes
  // - `presetBasic` (JS+TS) support
  // - `presetLangsExtensions` (markdown, yaml, jsonc) support
  // - Vue support
  // - UnoCSS support (`uno.config.ts` is required)
  // - Prettier support
  presetAll,
} from '@ims-view/eslint-config'

export default presetAll
```

See [preset.ts](./src/presets.ts) for more details.

### VSCode

```jsonc
{
  "eslint.experimental.useFlatConfig": true,
}
```

## Comparing to [`@antfu/eslint-config`](https://github.com/antfu/eslint-config)

Most of the rules are the same, but there are some differences:

- Use Prettier instead of [ESLint Stylistic](https://github.com/eslint-stylistic/eslint-stylistic).
- Support both Vue 2 and Vue 3.
- Support Vue Reactivity Transform.
- More stricter rules.

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/eternallycyf/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/eternallycyf/sponsors/sponsors.svg'/>
  </a>
</p>

