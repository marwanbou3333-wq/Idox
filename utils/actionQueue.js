class ActionQueue {
  constructor() {
    this.queue = [];
    this.processing = false;
  }
  add(action) {
    this.queue.push(action);
    this.process();
  }
  async process() {
    if (this.processing) return;
    this.processing = true;
    while (this.queue.length > 0) {
      const action = this.queue.shift();
      await action();
    }
    this.processing = false;
  }
}
module.exports = ActionQueue;