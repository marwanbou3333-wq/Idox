module.exports = {
  extract: (text) => (text.match(/@\w+/g) || []),
  format: (mention) => `<@${mention}>`
};