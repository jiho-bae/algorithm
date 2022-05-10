function sol(input) {
  const N = +input[0];
  const presentList = {};

  for (let i = 1; i <= N; i++) {
    const [person, cmd] = input[i].split(' ');
    if (cmd === 'enter') {
      presentList[person] = 1;
    } else {
      delete presentList[person];
    }
  }

  const answer = Object.keys(presentList).sort().reverse().join('\n');
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
