class MinHeap {
  constructor() {
    this.heap = [];
    this.heap.push(-Infinity);
  }

  insert(val) {
    this.heap.push(val);
    this.upheap(this.heap.length - 1);
  }

  upheap(pos) {
    let tmp = this.heap[pos];
    while (tmp < this.heap[parseInt(pos / 2)]) {
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }
    this.heap[pos] = tmp;
  }

  get() {
    if (this.heap.length === 2) return this.heap.pop();
    let res = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.heap.length - 1);
    return res;
  }

  downheap(pos, len) {
    let tmp = this.heap[pos],
      child;
    while (pos <= parseInt(len / 2)) {
      child = pos * 2;
      if (child < len && this.heap[child] > this.heap[child + 1]) child++;
      if (tmp <= this.heap[child]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = tmp;
  }

  size() {
    return this.heap.length - 1;
  }

  front() {
    return this.heap[1];
  }
}

function sol(input) {
  const N = +input[0];
  const answer = [];
  const maxHeap = new MinHeap();
  const minHeap = new MinHeap();

  maxHeap.insert(-input[1]);
  answer.push(-maxHeap.front());

  for (let i = 2; i <= N; i++) {
    const next = +input[i];
    if (minHeap.size() === maxHeap.size()) {
      maxHeap.insert(-next);
    } else {
      minHeap.insert(next);
    }
    if (-maxHeap.front() > minHeap.front()) {
      const tmp1 = -maxHeap.get();
      const tmp2 = minHeap.get();
      maxHeap.insert(-tmp2);
      minHeap.insert(tmp1);
    }

    answer.push(-maxHeap.front());
  }

  return answer.join('\n');
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
