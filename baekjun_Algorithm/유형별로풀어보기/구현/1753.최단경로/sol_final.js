// 넘 코드가 더러워서 정리만 하고 끝내보았다.

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

function dijkstra(V, k, graphs) {
  const distance = new Array(V + 1).fill(Infinity);
  const visits = new Array(V + 1).fill(0);
  distance[k] = 0;

  const pq = new MinHeap();
  pq.push({ node: k, dist: 0 });

  while (pq.size()) {
    const { node, dist } = pq.pop();

    if (visits[node]) continue;
    visits[node] = 1;

    const nextNodes = graphs[node];
    if (!nextNodes.length) continue;

    for (let { node: nextNode, dist: nextDist } of nextNodes) {
      if (distance[nextNode] > dist + nextDist) {
        distance[nextNode] = dist + nextDist;
        pq.push({ node: nextNode, dist: distance[nextNode] });
      }
    }
  }

  return distance;
}

function filterDist(dist) {
  return dist === Infinity ? 'INF' : dist;
}

function sol(input) {
  const [V, E] = input[0].split(' ').map(Number);
  const k = +input[1];

  const graphs = Array.from({ length: V + 1 }, () => new Array());

  for (let inputStr of input.slice(2)) {
    const [from, to, w] = inputStr.split(' ').map(Number);
    graphs[from].push({ node: to, dist: w });
  }

  const distance = dijkstra(V, k, graphs);

  return distance.slice(1).map(filterDist).join('\n');
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
