class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(-1);
    this.tail = new Node(-1);
    this.length = 0;
    this.firstIdx = 0;
    this.cntObj = {};
  }

  add(data) {
    if (this.length === 0) {
      const node = new Node(data, this.head, this.tail);
      this.head.next = node;
      this.tail.prev = node;
    } else {
      const lastNode = this.tail.prev;
      const node = new Node(data, lastNode, this.tail);
      lastNode.next = node;
      this.tail.prev = node;
    }

    this.length++;
  }

  isFirstNode(data) {
    const firstNode = this.head.next;
    if (firstNode.data === data) return true;
    return false;
  }

  removeFirstNode() {
    let firstNode = this.head.next;
    let secondNode = firstNode.next;

    do {
      this.firstIdx++;
      this.cntObj[firstNode.data]--;
      this.head.next = secondNode;
      secondNode.prev = this.head;
      this.length--;

      firstNode = secondNode;
      secondNode = firstNode.next;
    } while (this.cntObj[firstNode.data] > 1);
  }
}

function solution(gems) {
  const size = new Set(gems).size;
  const list = new LinkedList();
  const { cntObj } = list;
  let answer;
  let len = 0;

  let minSize = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < gems.length; i++) {
    const gem = gems[i];
    list.add(gem);

    if (!cntObj.hasOwnProperty(gem)) {
      cntObj[gem] = 1;
      len++;
    } else {
      cntObj[gem]++;

      if (list.isFirstNode(gem)) {
        list.removeFirstNode();
      }
    }

    if (cntObj[gem] === 0) {
      delete cntObj[gem];
      len--;
    }

    if (len === size) {
      const diff = i - list.firstIdx;
      if (diff < minSize) {
        minSize = diff;
        answer = [list.firstIdx + 1, i + 1];
      }
    }
  }

  return answer;
}
