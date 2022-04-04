function sol(input) {
  const N = +input;
  const romeCharacterTypes = [1, 5, 10, 50];
  const rcTypeLength = romeCharacterTypes.length;
  const characters = {};

  function dfs(L, sum, idx) {
    if (L === N) {
      characters[sum] = 1;
      return;
    }

    for (let i = idx; i < rcTypeLength; i++) {
      dfs(L + 1, sum + romeCharacterTypes[i], i);
    }
  }

  dfs(0, 0, 0);

  return Object.keys(characters).length;
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
