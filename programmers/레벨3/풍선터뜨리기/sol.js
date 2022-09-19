// 힙 2개나 쓴건 좀 과한듯..?

const MinHeap = (function () {
  function MinHeap() {
    this.heap = [-Infinity];
  }

  MinHeap.prototype.firstElem = function () {
    return this.heap[1];
  };

  MinHeap.prototype.size = function () {
    return this.heap.length - 1;
  };

  MinHeap.prototype.push = function (val) {
    this.heap.push(val);
    this._upheap(this.size());
  };

  MinHeap.prototype._upheap = function (pos) {
    let pushedVal = this.heap[pos];
    let parentPos = Math.floor(pos / 2);

    while (pushedVal < this.heap[parentPos]) {
      this.heap[pos] = this.heap[parentPos];
      pos = parentPos;
      parentPos = Math.floor(pos / 2);
    }

    this.heap[pos] = pushedVal;
  };

  MinHeap.prototype.pop = function () {
    if (this.size() === 1) return this.heap.pop();

    let poppedVal = this.heap[1];
    this.heap[1] = this.heap.pop();
    this._downheap(1, this.size());
    return poppedVal;
  };

  MinHeap.prototype._downheap = function (pos, lastPos) {
    const target = Math.floor(lastPos / 2);
    let lastVal = this.heap[pos];
    let childPos;

    while (pos <= target) {
      childPos = pos * 2;
      if (childPos < lastPos && this.heap[childPos] > this.heap[childPos + 1]) childPos += 1;
      if (lastVal <= this.heap[childPos]) break;
      this.heap[pos] = this.heap[childPos];
      pos = childPos;
    }
    this.heap[pos] = lastVal;
  };

  return MinHeap;
})();

function solution(a) {
  const len = a.length;
  if (len <= 3) return len;

  const leftHeap = new MinHeap();
  const rightHeap = new MinHeap();
  const delObj = {};
  let answer = len;

  for (let i = 2; i < len; i++) {
    rightHeap.push(a[i]);
  }

  for (let i = 1; i <= len - 2; i++) {
    const cursor = a[i];
    leftHeap.push(a[i - 1]);

    if (cursor === rightHeap.firstElem()) {
      do {
        rightHeap.pop();
      } while (delObj[rightHeap.firstElem()]);
    }

    if (cursor > leftHeap.firstElem() && cursor > rightHeap.firstElem()) {
      answer--;
    }

    delObj[cursor] = true;
  }

  return answer;
}
