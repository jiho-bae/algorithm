function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  let answer = Infinity;
  const relations = Array.from({ length: N + 1 }, () =>
    new Array(N + 1).fill(0)
  );

  input.slice(1).forEach((str) => {
    const [from, to] = str.split(' ');
    relations[from][to] = 1;
    relations[to][from] = 1;
  });

  function dfs(L, idx, candidates) {
    if (L === 3) {
      const cntOfRelations =
        candidates.reduce((acc, val) => acc + getCntOfRelation(val), 0) - 6;
      answer = Math.min(answer, cntOfRelations);
      return;
    }

    for (let i = idx; i <= N; i++) {
      if (candidates.length === 0 || checkRelation(...candidates, i)) {
        dfs(L + 1, i + 1, [...candidates, i]);
      }
    }
  }

  dfs(0, 1, []);

  function getCntOfRelation(personNum) {
    return relations[personNum].reduce(addFunc, 0);
  }

  function addFunc(acc, val) {
    return acc + val;
  }

  function checkRelation(...args) {
    let isRelation = true;

    const argsLen = args.length;
    for (let i = 0; i < argsLen - 1; i++) {
      for (let j = i + 1; j < argsLen; j++) {
        if (!relations[args[i]][args[j]]) {
          isRelation = false;
          break;
        }
      }
    }
    return isRelation;
  }

  return answer === Infinity ? -1 : answer;
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
