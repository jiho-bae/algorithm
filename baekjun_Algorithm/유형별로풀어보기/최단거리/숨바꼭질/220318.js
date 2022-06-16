function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const adjList = Array.from({ length: N }, () => new Array());
  const distance = new Array(N).fill(Infinity);
  const visit = new Array(N).fill(0);

  input.slice(1).forEach((str) => {
    const [from, to] = str.split(' ').map(Number);
    adjList[from - 1].push(to - 1);
    adjList[to - 1].push(from - 1);
  });

  distance[0] = 0;
  visit[0] = 0;
  adjList[0].forEach((to) => (distance[to] = 1));

  let cnt = 1;
  while (cnt < N) {
    let nextIdx = -1;
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < N; i++) {
      if (distance[i] < min && !visit[i]) {
        nextIdx = i;
        min = distance[i];
      }
    }
    visit[nextIdx] = 1;

    adjList[nextIdx].forEach((to) => {
      if (distance[nextIdx] + 1 < distance[to]) {
        distance[to] = distance[nextIdx] + 1;
      }
    });
    cnt += 1;
  }

  function getAnswer(distance) {
    const maxLen = Math.max(...distance);
    const idx = distance.indexOf(maxLen) + 1;
    const cnt = distance.filter((elem) => elem === maxLen).length;

    return [idx, maxLen, cnt];
  }

  const answer = getAnswer(distance);
  return answer.join(' ');
}

const input = ['6 7', '3 6', '4 3', '3 2', '1 3', '1 2', '2 4', '5 2'];
sol(input);
