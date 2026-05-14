module.exports = {
  state: {},
  setState(key, val) { this.state[key] = val; },
  getState(key) { return this.state[key]; }
};