function sol(input) {
  const N = +input[0];
  const lessons = input
    .slice(1)
    .map((str) => str.split(' ').map(Number))
    .sort((a, b) => a[0] - b[0]);
  const maxHeap = new PriorityQueue();
  maxHeap.push(-lessons[0][1]);

  for (let i = 1; i < N; i++) {
    const lesson = lessons[i];

    if (-maxHeap.firstElem() > lesson[0]) {
      maxHeap.push(-lesson[1]);
    } else {
      maxHeap.pop();
      maxHeap.push(-lesson[1]);
    }
  }

  return maxHeap.count;
}

class PriorityQueue {
  constructor(maxSize = 200000) {
    this.heap = new Array(maxSize).fill();
    this.count = 0;
    this._maxSize = maxSize;
  }

  firstElem() {
    return this.heap[0];
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

const input = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    console.log(sol(input));
    process.exit();
  });
