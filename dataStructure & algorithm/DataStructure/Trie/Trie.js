// Trie가 a-z로 이루어진 문자열을 받는다고 가정했다.
// children에는 26(a-z의 갯수)사이즈의 배열 혹은 객체 {}가 들어가면 될 듯.
// 여기서는 배열로 구현하였다.
// 삽입 : O(str.length)
// 탐색 : O(str.length)

class Node {
  constructor(data) {
    this.data = data;
    this.children = new Array(26);
  }
}

class Trie {
  constructor() {
    this.root = new Node(null);
  }

  insert(str) {
    const end = str.length - 1;
    let node = this.root;

    for (let i = 0; i <= end; i++) {
      const idx = this.getIdx(str[i]);
      if (!node.children[idx]) {
        node.children[idx] = new Node(null);
      }

      node = node.children[idx];
    }

    node.data = true;
    return str;
  }

  contains(str) {
    const end = str.length - 1;
    let node = this.root;

    for (let i = 0; i <= end; i++) {
      const idx = this.getIdx(str[i]);
      if (!node.children[idx]) return false;
      node = node.children[idx];
    }

    if (node.data) {
      return true;
    }

    return false;
  }

  getIdx(char) {
    return char.charCodeAt() - 97;
  }
}
