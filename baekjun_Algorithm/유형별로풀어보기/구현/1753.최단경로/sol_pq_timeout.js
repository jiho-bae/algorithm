// 다익스트라 + 다음탐색노드를 pq 기반으로 가져온다.
// 근데 timeout. Object 새로 만들고 배치하고 하는게 시간이 많이드나..?

const MinHeap = (function () {
  function MinHeap() {
    this.heap = [-Infinity];
  }

  MinHeap.prototype.size = function () {
    return this.heap.length - 1;
  };

  MinHeap.prototype.push = function (val) {
    this.heap.push(val);
    this._upheap(this.size());
  };

  MinHeap.prototype._upheap = function (pos) {
    let pushed = this.heap[pos];
    let parentPos = Math.floor(pos / 2);

    while (pushed.dist < this.heap[parentPos].dist) {
      this.heap[pos] = this.heap[parentPos];
      pos = parentPos;
      parentPos = Math.floor(pos / 2);
    }

    this.heap[pos] = pushed;
  };

  MinHeap.prototype.pop = function () {
    if (this.size() === 1) return this.heap.pop();

    let popped = this.heap[1];
    this.heap[1] = this.heap.pop();
    this._downheap(1, this.size());
    return popped;
  };

  MinHeap.prototype._downheap = function (pos, lastPos) {
    const target = Math.floor(lastPos / 2);
    let lastVal = this.heap[pos];
    let childPos;

    while (pos <= target) {
      childPos = pos * 2;
      if (childPos < lastPos && this.heap[childPos].dist > this.heap[childPos + 1].dist) childPos += 1;
      if (lastVal.dist <= this.heap[childPos].dist) break;
      this.heap[pos] = this.heap[childPos];
      pos = childPos;
    }
    this.heap[pos] = lastVal;
  };

  return MinHeap;
})();

function sol(input) {
  const [V, E] = input[0].split(' ').map(Number);
  const k = +input[1];

  const graphs = Array.from({ length: V + 1 }, () => new Object());

  for (let i = 2, iter = input.length; i < iter; i++) {
    const [from, to, w] = input[i].split(' ').map(Number);
    const dist = graphs[from][to] ? Math.min(graphs[from][to], w) : w;
    graphs[from] = { ...graphs[from], [to]: dist };
  }

  const visits = new Array(V + 1).fill(0);
  const distance = new Array(V + 1).fill(Infinity);
  distance[k] = 0;

  const pq = new MinHeap();
  pq.push({ node: k, dist: 0 });

  while (pq.size()) {
    const { node, dist } = pq.pop();

    if (visits[node]) continue;
    visits[node] = 1;

    const nexts = Object.entries(graphs[node]);
    if (!nexts.length) continue;

    for (let i = 0, iter = nexts.length; i < iter; i++) {
      const [next, w] = nexts[i];

      if (distance[next] > dist + w) {
        distance[next] = dist + w;
        pq.push({ node: +next, dist: distance[next] });
      }
    }
  }

  return distance
    .slice(1)
    .map((e) => (e === Infinity ? 'INF' : e))
    .join('\n');
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
