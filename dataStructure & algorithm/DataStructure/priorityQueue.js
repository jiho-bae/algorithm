class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(elem) {
    let isContain = false;
    const len = this.queue.length;

    if (!len) {
      this.queue[0] = elem;
      return;
    }

    for (let i = 0; i < len; i++) {
      if (this.queue[i] < elem) {
        this.queue.splice(i, 0, elem);
        isContain = true;
        break;
      }
    }

    if (!isContain) this.queue.push(elem);
  }

  dequeue() {
    const len = this.queue.length;

    if (!len) return new Error('데이터가 없습니다.');
    return this.queue.shift();
  }
}
