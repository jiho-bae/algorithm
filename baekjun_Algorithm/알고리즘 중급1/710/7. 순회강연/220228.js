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
  if (N === 0) {
    return 0;
  }

  const lectures = input
    .slice(1)
    .map((str) => str.split(' ').map(Number))
    .sort((a, b) => a[1] - b[1]);
  let answer = 0;
  const pq = new MinHeap();
  let time = 1;

  pq.insert(lectures[0][0]);

  for (let i = 1; i < N; i++) {
    if (time < lectures[i][1]) {
      pq.insert(lectures[i][0]);
      time++;
    } else {
      if (pq.front() < lectures[i][0]) {
        pq.get();
        pq.insert(lectures[i][0]);
      }
    }
  }

  const pqSize = pq.size();
  for (let i = 0; i < pqSize; i++) {
    answer += pq.get();
  }

  return answer;
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
