# Word Count Plugin

Add word count to markdown files via [markdown-magic](https://github.com/DavidWells/markdown-magic)

## Install

```
npm i markdown-magic markdown-magic-wordcount --save-dev
```

## Adding the plugin

See `example.js` for usage.

```js
const fs = require('fs')
const path = require('path')
const markdownMagic = require('markdown-magic')

const config = {
  transforms: {
    // make sure wordcount transform is listed last
    WORDCOUNT: require('markdown-magic-wordcount')
  }
}

const markdownPath = path.join(__dirname, 'README.md')
markdownMagic(markdownPath, config)
```

## Usage in markdown

```md
<!-- ⛔️ AUTO-GENERATED-CONTENT:START (WORDCOUNT) -->
89
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->
```
