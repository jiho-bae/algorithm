function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const arrA = input[1].split(' ').map(Number);
  const arrB = input[2].split(' ').map(Number);

  let i = (j = 0);

  const answer = [];
  while (i < N && j < M) {
    if (arrA[i] < arrB[j]) {
      answer.push(arrA[i++]);
    } else {
      answer.push(arrB[j++]);
    }
  }

  while (i < N) {
    answer.push(arrA[i++]);
  }

  while (j < M) {
    answer.push(arrB[j++]);
  }

  return answer.join(' ');
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
