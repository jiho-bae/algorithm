function sol(input) {
  const [L, C] = input[0].split(' ').map(Number);
  const alphabets = input[1].split(' ').sort();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const answer = [];

  function recursion(depth, prev, str) {
    if (depth === L) {
      const vowelCnt = vowels.filter((vowel) => str.includes(vowel)).length;
      if (vowelCnt === 0 || L - vowelCnt < 2) return;
      answer.push(str);
      return;
    }

    for (let i = prev + 1; i < C; i++) {
      recursion(depth + 1, i, str + alphabets[i]);
    }
  }

  recursion(0, -1, '');

  return answer.join('\n');
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
