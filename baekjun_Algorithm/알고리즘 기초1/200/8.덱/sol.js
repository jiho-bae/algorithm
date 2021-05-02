class Deque {
  constructor() {
    this.data = [];
    this.rear = 0;
  }
  push_front(value) {
    this.data.unshift(value);
    this.rear = this.rear + 1;
  }
  push_back(value) {
    this.data[this.rear++] = value;
  }
  size() {
    return this.rear;
  }
  empty() {
    return this.rear === 0 ? 1 : 0;
  }
  pop_front() {
    if (!this.empty()) {
      this.rear--;
      return this.data.shift();
    }
    return -1;
  }
  pop_back() {
    if (!this.empty()) {
      this.rear--;
      return this.data.pop();
    }
    return -1;
  }
  front() {
    if (!this.empty()) {
      return this.data[0];
    }
    return -1;
  }
  back() {
    if (!this.empty()) {
      return this.data[this.rear - 1];
    }
    return -1;
  }
}

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = parseInt(input[0]);
let deque = new Deque();
let answer = "";
for (let i = 1; i <= n; i++) {
  let [cmd, value] = input[i].split(" ");
  if (value) {
    deque[cmd](parseInt(value));
  } else {
    answer += `${deque[cmd]()}\n`;
  }
}
console.log(answer);
