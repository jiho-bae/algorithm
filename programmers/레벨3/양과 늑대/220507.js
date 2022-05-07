function solution(info, edges) {
  let answer = 0;
  const relations = Array.from({ length: 17 }, () => new Array());

  for (let edge of edges) {
    const [parent, child] = edge;
    relations[parent].push(child);
  }

  function dfs(now, nexts, s, w) {
    if (w >= s) return;
    if (s > answer) {
      answer = s;
    }

    const parent = relations[now];
    for (let child of parent) {
      nexts.add(child);
    }

    for (let nextNode of nexts) {
      const nextSets = new Set(nexts);
      nextSets.delete(nextNode);

      if (info[nextNode]) {
        dfs(nextNode, nextSets, s, w + 1);
      } else {
        dfs(nextNode, nextSets, s + 1, w);
      }
    }
  }
  dfs(0, new Set(relations[0]), 1, 0);

  return answer;
}
