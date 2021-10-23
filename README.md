# ESM-PathNames

You can use `__dirname` and `__filename` when using ESM(ECMAScript module).

## Install

```shell
npm i esm-pathnames
```

## Usage

```js
import { getPathNames } from 'esm-pathnames';

const { __dirname, __filename } = getPathNames(import.meta);
```

## Restrictions

- The browser environment is not yet supported.
