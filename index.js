/* Custom Transform Plugin example */
const wordcount = require('wordcount')

module.exports = function WORDCOUNT(content, options, config) {
  const count = wordcount(config.outputContent);
  return count
}