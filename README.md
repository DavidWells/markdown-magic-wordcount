# Markdown Magic Word Count Plugin

Plugin to count words in markdown file.

## Install

```
npm i markdown-magic markdown-magic-wordcount --save-dev
```

## Adding the plugin

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

const markdownPath = path.join(__dirname, '..', 'README.md')
markdownMagic(markdownPath, config)

```

## Usage in markdown

```md
<!-- ⛔️ AUTO-GENERATED-CONTENT:START (WORDCOUNT) -->
This will be replace with the wordcount
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->
```
