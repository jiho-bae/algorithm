function sol(input) {
  const antTunnel = {};

  input.slice(1).forEach((str) => {
    const [depth, ...foodInfos] = str.split(' ');
    let cur = antTunnel;

    for (let i = 0; i < depth; i++) {
      cur = addFoodToTunnel(cur, foodInfos[i]);
    }
  });

  function printDfs(tunnel, depth) {
    Object.entries(tunnel)
      .sort()
      .forEach(([food, nextTunnel]) => {
        const printStr = '-'.repeat(depth * 2) + food + '\n';
        answer += printStr;

        if (Object.values(nextTunnel).length > 0) {
          printDfs(nextTunnel, depth + 1);
        }
      });
  }

  let answer = '';
  printDfs(antTunnel, 0);

  return answer;
}

function addFoodToTunnel(tunnel, food) {
  if (!(food in tunnel)) {
    tunnel[food] = {};
  }

  return tunnel[food];
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
