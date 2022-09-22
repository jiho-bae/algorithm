// 다음 노드까지의 거리가 여러개일 수 있어서
// graphs의 [from]에 Object를 만들어 넣어서, 최소값만 가지게 했는데
// 이걸 spread operator로 펼치고, 다시 객체로 넣고, 불러올 때 Object.entries 쓰고 하는게 부담인 듯.
// 어차피 최소값이 아닌 값이라면, PQ에 담기지 않을테니, 배열로 해도 되겠다.
// 그래서 graphs[from]의 원소값을 배열로 넣고, 바로바로 push해줘서 탐색해보니 성공. 런타임 1.1초소모

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

  const graphs = Array.from({ length: V + 1 }, () => new Array());

  for (let i = 2, iter = input.length; i < iter; i++) {
    const [from, to, w] = input[i].split(' ').map(Number);
    graphs[from].push({ node: to, dist: w });
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

    const nexts = graphs[node];
    if (!nexts.length) continue;

    for (let i = 0, iter = nexts.length; i < iter; i++) {
      const { node: nextNode, dist: nextDist } = nexts[i];

      if (distance[nextNode] > dist + nextDist) {
        distance[nextNode] = dist + nextDist;
        pq.push({ node: nextNode, dist: distance[nextNode] });
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
