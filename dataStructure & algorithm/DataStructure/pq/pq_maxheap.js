class PriorityQueue {
  constructor(maxSize = 100) {
    this.heap = new Array(maxSize).fill();
    this.count = 0;
    this._maxSize = maxSize;
  }

  swap(idx1, idx2) {
    const tmp = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = tmp;
  }

  push(data) {
    if (this.count >= this._maxSize) return -9999;
    this.heap[this.count] = data;
    this._upheap();
    return data;
  }

  _upheap() {
    let now = this.count;
    let parent = Math.floor((now - 1) / 2);

    while (now > 0 && this.heap[now] > this.heap[parent]) {
      this.swap(now, parent);
      now = parent;
      parent = Math.floor((now - 1) / 2);
    }

    this.count += 1;
  }

  pop() {
    if (this.count <= 0) return -9999;

    let res = this.heap[0];
    this.count--;
    this._downheap();
    return res;
  }

  _downheap() {
    this.heap[0] = this.heap[this.count];
    this.heap[this.count] = null;

    let now = 0,
      leftChild = 1,
      rightChild = 2;
    let target = now;

    while (leftChild < this.count) {
      if (this.heap[target] < this.heap[leftChild]) target = leftChild;
      if (
        this.heap[target] < this.heap[rightChild] &&
        rightChild < this.count
      ) {
        target = rightChild;
      }
      if (target === now) break;
      else {
        this.swap(now, target);
        now = target;
        leftChild = now * 2 + 1;
        rightChild = now * 2 + 2;
      }
    }
  }
}
