class MaxHeap {
  constructor() {
    this.heap = [];
  }

  length() {
    return this.heap.length;
  }

  swap(num) {
    const { heap } = this;

    if (!this.length()) {
      heap.push(num);
      return;
    }

    let idx = 0;
    while (true) {
      if (num < heap[idx]) {
        idx += 1;
        continue;
      }
      heap.splice(idx, 0, num);
      break;
    }
  }

  shift() {
    return this.heap.shift();
  }

  pop() {
    return this.heap.pop();
  }

  front() {
    return this.heap[0];
  }

  back() {
    return this.heap[this.length() - 1];
  }
}

function solution(operations) {
  const maxHeap = new MaxHeap();

  operations.forEach((operation) => {
    const [cmd, num] = operation.split(' ');

    if (cmd === 'D') {
      if (num === '1') maxHeap.shift();
      else maxHeap.pop();
      return;
    }

    maxHeap.swap(+num);
  });

  if (!maxHeap.length()) return [0, 0];
  return [maxHeap.front(), maxHeap.back()];
}
