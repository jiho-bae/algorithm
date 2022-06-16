class MaxHeap {
  constructor() {
    // this is where the array that represents our heap will be stored
    this.values = [];
  }

  // index of the parent node
  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  // index of the left child node
  leftChild(index) {
    return index * 2 + 1;
  }

  // index of the right child node
  rightChild(index) {
    return index * 2 + 2;
  }

  // returns true if index is of a node that has no children
  isLeaf(index) {
    return (
      index >= Math.floor(this.values.length / 2) &&
      index <= this.values.length - 1
    );
  }

  // swap using ES6 destructuring
  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }

  add(element) {
    // add element to the end of the heap
    this.values.push(element);
    // move element up until it's in the correct position
    this.heapifyUp(this.values.length - 1);
  }

  heapifyUp(index) {
    let currentIndex = index,
      parentIndex = this.parent(currentIndex);

    // while we haven't reached the root node and the current element is greater than its parent node
    while (
      currentIndex > 0 &&
      this.values[currentIndex] > this.values[parentIndex]
    ) {
      // swap
      this.swap(currentIndex, parentIndex);
      // move up the binary heap
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  }

  // removes and returns max element
  extractMax() {
    if (this.values.length < 1) return 'heap is empty';

    // get max and last element
    const max = this.values[0];
    const end = this.values.pop();
    // reassign first element to the last element
    this.values[0] = end;
    // heapify down until element is back in its correct position
    this.heapifyDown(0);

    // return the max
    return max;
  }

  heapifyDown(index) {
    // if the node at index has children
    if (!this.isLeaf(index)) {
      // get indices of children
      let leftChildIndex = this.leftChild(index),
        rightChildIndex = this.rightChild(index),
        // start out largest index at parent index
        largestIndex = index;

      // if the left child > parent
      if (this.values[leftChildIndex] > this.values[largestIndex]) {
        // reassign largest index to left child index
        largestIndex = leftChildIndex;
      }

      // if the right child > element at largest index (either parent or left child)
      if (this.values[rightChildIndex] >= this.values[largestIndex]) {
        // reassign largest index to right child index
        largestIndex = rightChildIndex;
      }

      // if the largest index is not the parent index
      if (largestIndex !== index) {
        // swap
        this.swap(index, largestIndex);
        // recursively move down the heap
        this.heapifyDown(largestIndex);
      }
    }
  }
}

function sol(input) {
  const [N, K] = input[0].split(' ').map(Number);
  const jewelrys = input
    .slice(1, 1 + N)
    .map((str) => str.split(' ').map(Number))
    .sort((a, b) => a[0] - b[0]);

  const bags = input
    .slice(1 + N)
    .map(Number)
    .sort((a, b) => a - b);

  const pq = new MaxHeap();
  let answer = 0;
  let index = 0;

  for (let i = 0; i < K; i++) {
    while (index < N) {
      if (bags[i] >= jewelrys[index][0]) {
        pq.add(jewelrys[index][1]);
        index++;
      } else {
        answer += pq.extractMax();
        break;
      }
    }

    if (index === N) {
      answer += pq.extractMax();
    }
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
