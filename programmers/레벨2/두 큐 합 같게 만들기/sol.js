class Queue {
  constructor() {
    this.queue = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    if (this.queue[this.rear] === undefined) {
      return 0;
    }
    return this.rear - this.front + 1;
  }

  enqueue(value) {
    if (this.size() === 0) {
      this.queue[0] = value;
    } else {
      this.rear += 1;
      this.queue[this.rear] = value;
    }
  }

  dequeue() {
    const tmp = this.queue[this.front];
    delete this.queue[this.front];

    if (this.front === this.rear) {
      this.front = this.rear = 0;
    } else {
      this.front += 1;
    }
    return tmp;
  }

  firstElem() {
    return this.queue[this.front];
  }
}

function solution(queue1, queue2) {
  let sumQ1 = queue1.reduce((acc, val) => acc + BigInt(val), 0n);
  let sumQ2 = queue2.reduce((acc, val) => acc + BigInt(val), 0n);
  const sum = sumQ1 + sumQ2;
  const maxIter = queue1.length * 3;
  if (sum % 2n === 1n) return -1;

  const q1 = new Queue();
  const q2 = new Queue();
  queue1.forEach((elem, idx) => q1.enqueue([BigInt(elem), `${idx}`]));
  queue2.forEach((elem, idx) => q2.enqueue([BigInt(elem), `${idx}`]));

  let answer = 0;
  const firstQ1Elem = [queue1[0], '0'];
  const firstQ2Elem = [queue2[0], '0'];

  function isSameIdx(elem1, elem2) {
    if (elem1[1] === elem2[1]) return true;
    return false;
  }

  while (sumQ1 !== sumQ2 && answer < maxIter) {
    if (sumQ1 > sumQ2) {
      const pop = q1.dequeue();
      q2.enqueue(pop);
      sumQ1 -= pop[0];
      sumQ2 += pop[0];
    } else {
      const pop = q2.dequeue();
      q1.enqueue(pop);
      sumQ2 -= pop[0];
      sumQ1 += pop[0];
    }
    answer += 1;

    if (!q1.size() || !q2.size()) break;

    if (
      isSameIdx(q1.firstElem(), firstQ1Elem) &&
      isSameIdx(q2.firstElem(), firstQ2Elem)
    ) {
      break;
    }
  }

  return sumQ1 === sumQ2 ? answer : -1;
}
