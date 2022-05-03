function solution(info, edges) {
  let answer = -1;
  const directs = Array.from({ length: 17 }, () => new Array());
  edges.forEach((edge) => {
    const [from, to] = edge;
    directs[from].push(to);
  });

  function dfs(current, sheeps, wolfs, nexts) {
    if (wolfs >= sheeps) return;
    if (sheeps > answer) {
      answer = sheeps;
    }

    if (directs[current].length) {
      for (let next of directs[current]) {
        nexts.add(next);
      }
    }

    for (let next of nexts) {
      const nextNodes = new Set([...nexts]);
      nextNodes.delete(next);

      if (info[next]) {
        dfs(next, sheeps, wolfs + 1, nextNodes);
      } else {
        dfs(next, sheeps + 1, wolfs, nextNodes);
      }
    }
  }

  dfs(0, 1, 0, new Set([...directs[0]]));

  return answer;
}
