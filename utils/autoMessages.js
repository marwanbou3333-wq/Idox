module.exports = {
  messages: [],
  addMessage: (msg) => { this.messages.push(msg); },
  getMessages: () => this.messages,
  clearMessages: () => { this.messages = []; }
};