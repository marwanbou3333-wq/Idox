module.exports = {
  generate: () => 'user_' + Math.random().toString(36).substr(2, 9),
  validate: (nick) => nick.length > 0 && nick.length < 32
};