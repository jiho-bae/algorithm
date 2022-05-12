class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedList {
  constructor(size) {
    this.head = new Node(-1);
    this.tail = new Node(-1);
    this.cursor = null;
    this.size = size;
    this.length = 0;
    this.delList = [];
  }

  add() {
    if (this.length === 0) {
      const node = new Node(this.length, this.head, this.tail);
      this.head.next = node;
      this.tail.prev = node;
    } else {
      const lastNode = this.tail.prev;
      const node = new Node(this.length, lastNode, this.tail);
      lastNode.next = node;
      this.tail.prev = node;
    }

    this.length++;
  }

  initCursor(idx) {
    this.cursor = this.getNode(idx);
  }

  getNode(idx) {
    let node = this.head.next;

    for (let i = 0; i < idx; i++) {
      node = node.next;
    }

    return node;
  }

  remove() {
    const prevNode = this.cursor.prev;
    const nextNode = this.cursor.next;
    nextNode.prev = prevNode;
    prevNode.next = nextNode;

    this.delList.push(this.cursor);

    if (nextNode.data === -1) {
      this.cursor = prevNode;
    } else {
      this.cursor = nextNode;
    }
    this.length--;
  }

  recovery() {
    const node = this.delList.pop();
    node.prev.next = node;
    node.next.prev = node;

    this.length++;
  }

  up(idx) {
    for (let i = 0; i < idx; i++) {
      this.cursor = this.cursor.prev;
    }
  }

  down(idx) {
    for (let i = 0; i < idx; i++) {
      this.cursor = this.cursor.next;
    }
  }

  print() {
    let result = '';
    let idx = 0;
    let cur = this.head.next;

    while (cur.data !== -1 || idx < this.size) {
      if (cur.data === idx) {
        result += 'O';
        cur = cur.next;
      } else {
        result += 'X';
      }
      idx++;
    }

    return result;
  }
}

function solution(n, k, cmd) {
  const UP = 'U';
  const DOWN = 'D';
  const DEL = 'C';
  const RECOVERY = 'Z';

  const linkedList = new LinkedList(n);

  for (let i = 0; i < n; i++) {
    linkedList.add();
  }
  linkedList.initCursor(k);

  for (let c of cmd) {
    let [behavior, dist] = c.split(' ');

    if (behavior === RECOVERY) {
      linkedList.recovery();
    } else if (behavior === DEL) {
      linkedList.remove();
    } else if (behavior === UP) {
      linkedList.up(+dist);
    } else if (behavior === DOWN) {
      linkedList.down(+dist);
    }
  }
  return linkedList.print();
}

solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z']);

solution(8, 2, [
  'D 2',
  'C',
  'U 3',
  'C',
  'D 4',
  'C',
  'U 2',
  'Z',
  'Z',
  'U 1',
  'C',
]);
