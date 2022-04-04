function sol(input) {
  if (input === '') return 0;
  const numberCnt = 10;
  const alphabetCnt = 26;
  let answer = 0;

  function getCntByType(cntType) {
    return cntType === 'c' ? alphabetCnt : numberCnt;
  }
  answer += getCntByType(input[0]);

  for (let i = 1; i < input.length; i++) {
    if (input[i - 1] === input[i]) {
      answer = answer * getCntByType(input[i]) - answer;
    } else {
      answer *= getCntByType(input[i]);
    }
  }

  return answer;
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
