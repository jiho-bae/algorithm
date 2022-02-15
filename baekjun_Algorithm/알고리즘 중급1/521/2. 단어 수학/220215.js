function sol(input) {
  const N = +input[0];
  const alphabetObj = {}
  const words = input.slice(1);

  for(let word of words){
    let cipher = 1;
    const reverseWord = word.split('').reverse().join('');

    for(let alphabet of reverseWord){
      alphabetObj[alphabet] = alphabetObj[alphabet] ? alphabetObj[alphabet]+cipher : cipher;
      cipher *= 10;
    }
  }

  const alphabetArr = Object.values(alphabetObj).sort((a,b)=>b-a);
  let number=9;
  
  return alphabetArr.reduce((sum, acc)=>sum + acc * number--, 0);
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
