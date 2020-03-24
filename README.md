
[![npm version](https://badgen.net/npm/v/build-react-icons)](https://npm.im/build-react-icons) [![npm downloads](https://badgen.net/npm/dm/build-react-icons)](https://npm.im/build-react-icons)

The tool generates ES6 React components for a set of svg icons

**build-react-icon based on [material-ui](https://github.com/mui-org/material-ui/tree/next/packages/material-ui-icons) icons builder**

## Features

- Optimize and clean SVG to use on web
- Create React components

### Get Started

```bash
yarn add build-react-icons
build-react-icons --svg-dir icons --output-dir src
```

## Advanced usage and Custom builds

`yarn build-react-icons --help` can be used to display the options available for building.


* `--output-dir, -o` - Directory to output generated components. [required]
* `--svg-dir, -s` - Directory containing the source SVG icons. [default: "src"]
* `--inner-path` - "Reach into" subdirs, since libraries like material-design-icons
  use arbitrary build directories to organize icons, e.g. "action/svg/production/".
* `--file-suffix` - Process only files ending with the specified suffix/
* `--glob` - Glob to match inside of --svg-dir     [default: "/**/*.svg"]
* `--rename-filter`  - Apply a custom filter to rename the generated icons.
* `--icon-worker` - File that accept each icon and should return it back.
* `--new` - Create files only for new icons.

If you experience any issues building icons or would like a feature added,
[file an issue](https://github.com/mui-org/material-ui/issues) and let us
know.

## Rename filter example

`yarn build-react-icons -s icons --rename-filter ./scripts/filter`

```js
const defaultFilter = require('build-react-icons/dist/utils/renameFilters/default').default;
/**
* @param file parsed with [path.parse()](https://nodejs.org/api/path.html#path_path_parse_path)
* @param innerPath
* @param config provided arguments
* @returns string
*/
exports.default = ({ base, ...rest }, innerPath, config) => {
  return defaultFilter({ ...rest, base: base.replace('Svg', '') }, innerPath, config);
}
```

## Icon worker example

`yarn build-react-icons -s icons --icon-worker ./scripts/filter`

```js
exports.default = icon => icon.replace(/ fill="#010101"/g, '')
```
