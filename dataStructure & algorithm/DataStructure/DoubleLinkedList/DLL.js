class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleLinkedList {
  constructor(size = 10) {
    this.head = new Node(-1);
    this.tail = new Node(-1);
    this.size = size;
    this.length = 0;
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

  getNode(idx) {
    let node = this.head.next;

    for (let i = 0; i < idx; i++) {
      node = node.next;
    }

    return node;
  }

  removeFirst() {
    const firstNode = this.head.next;
    if (firstNode === this.tail) return false;

    const secondNode = firstNode.next;
    this.head.next = secondNode;
    secondNode.prev = this.head;

    this.length--;
    return firstNode;
  }

  removeLast() {
    const lastNode = this.tail.prev;
    if (lastNode === this.head) return false;

    const secondTimeLastNode = lastNode.prev;
    secondTimeLastNode.next = this.tail;
    this.tail.prev = secondTimeLastNode;

    this.length--;
    return lastNode;
  }
}
