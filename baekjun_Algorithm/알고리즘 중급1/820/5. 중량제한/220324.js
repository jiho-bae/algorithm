function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const [islands, maxLen] = get2DIslands(input.slice(1, 1 + M));
  const [plantA, plantB] = input[1 + M].split(' ').map(Number);
  let answer = -1;

  function get2DIslands(islandArr) {
    const islands = Array.from({ length: N + 1 }, () => new Array());
    let maxLen = Number.MIN_SAFE_INTEGER;

    islandArr.forEach((str) => {
      const [from, to, len] = str.split(' ').map(Number);
      if (len > maxLen) maxLen = len;
      islands[from].push({ to, len });

      islands[to].push({ to: from, len });
    });

    return [islands, maxLen];
  }

  function bfs(start, end, targetWeight) {
    const visit = new Array(N + 1).fill(0);
    visit[start] = 1;
    const queue = [];
    queue.push(start);

    while (queue.length) {
      const now = queue.shift();
      if (now === end) return true;

      const len = islands[now].length;
      for (let i = 0; i < len; i++) {
        const next = islands[now][i].to;
        const nextWeight = islands[now][i].len;
        if (!visit[next] && targetWeight <= nextWeight) {
          visit[next] = 1;
          queue.push(next);
        }
      }
    }
    return false;
  }

  function binarySearch(start, end) {
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const isValidWeight = bfs(plantA, plantB, mid);

      if (isValidWeight) {
        answer = mid;
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  binarySearch(0, maxLen);

  return answer;
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
