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

function solution(operations) {
  const minHeap = new MinHeap();
  const maxHeap = new MinHeap();
  const heapOpers = {};

  function isExistOper(value) {
    if (heapOpers[value] > 0) return true;
    return false;
  }

  function deleteMax() {
    const curMax = -maxHeap.front();
    if (!curMax) return;

    if (isExistOper(curMax)) {
      maxHeap.get();
      const prevHeapOpers = heapOpers[curMax];
      heapOpers[curMax] -= 1;

      const curMin = minHeap.front();
      if (curMax === curMin && prevHeapOpers - 1 === heapOpers[curMin]) {
        minHeap.get();
      }
    } else maxHeap.get();
  }

  function deleteMin() {
    const curMin = minHeap.front();
    if (!curMin) return;

    if (isExistOper(curMin)) {
      minHeap.get();
      heapOpers[curMin] -= 1;

      const curMax = -maxHeap.front();
      if (!isExistOper(curMax) && curMax === curMin) {
        maxHeap.get();
      }
    } else minHeap.get();
  }

  function addNum(value) {
    const num = +value;
    minHeap.insert(num);
    maxHeap.insert(-num);
    heapOpers[value] = isExistOper(num) ? heapOpers[value] + 1 : 1;
  }

  operations.forEach((operation) => {
    const [cmd, num] = operation.split(' ');

    if (cmd === 'D') {
      if (num === '1') deleteMax();
      else deleteMin();
      return;
    }

    addNum(num);
  });

  Object.entries(heapOpers).forEach(([key, val]) => {
    if (val === 0) {
      if (minHeap.front() === +key) minHeap.get();
      if (-maxHeap.front() === +key) maxHeap.get();
    }
  });

  const answer = [-maxHeap.front(), minHeap.front()].map((elem) => {
    if (!elem) return 0;
    if (isExistOper(elem)) return elem;
  });

  console.log(maxHeap, minHeap, heapOpers);
  return answer;
}
