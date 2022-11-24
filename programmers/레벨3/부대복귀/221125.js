function solution(n, roads, sources, destination) {
  const relations = Array.from({ length: n + 1 }, () => new Array());

  roads.forEach(([a, b]) => {
    relations[a].push(b);
    relations[b].push(a);
  });

  const shortPath = new Array(n + 1).fill(-1);
  const visits = new Array(n + 1).fill(0);
  shortPath[destination] = 0;
  visits[destination] = 1;

  function bfs() {
    const queue = new Queue();
    relations[destination].forEach((desti) => {
      queue.enqueue([desti, 1]);
    });

    while (queue.size()) {
      const [cur, dist] = queue.dequeue();

      if (visits[cur]) continue;
      visits[cur] = 1;
      shortPath[cur] = dist;

      relations[cur]
        .filter((desti) => !visits[desti])
        .forEach((desti) => {
          queue.enqueue([desti, dist + 1]);
        });
    }
  }
  bfs();

  return sources.map((source) => shortPath[source]);
}

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
}

/**
 * 특수임무 수행중.
 * 지역이 유일한 번호로 구분. 지역간 통과시 1의 시간이 걸린다.
 * 부대원은 지도를 이용해 최단거리로 복귀 예정.
 * 적군의 방해로 인해 복귀가 불가능할 수도 있다.
 *
 * 총지역수 n, 길정보의 정수배열 roads, 부대원이 위치한 지역의 정수배열 sources, 지역 destination.
 * sources의 원소 순서대로 복귀하는 순서를 담은 배열 출력하기. 복귀가 불가능한 대원은 -1.
 *
 * 3<=n<=10만. 2<=roads<=50만. roads의 원소 [a,b]는 서로 왕복 가능.
 * 1<=sources<=500, 1<=source<=n. 1<=destination<=n
 *
 *  3<=n<=10만이다. 플로이드워셜x.
 * 2차원배열로 만들면 우선 망한다. 1차원으로 해결해야한다.
 * 1차원배열의 destination부터.. 시작해서 최단거리를 갱신해본다.
 * 갱신하면서 이미 방문한 목적지는 더이상 방문하지 않아도 된다. 한번 더 방문시 최단거리가 아니기 때문이다.
 *
 * 배열queue에서 시간초과가 발생하므로 연결리스트를 이용해본다.
 */
