function sol(input) {
  const books = {};

  function addKey(obj, key) {
    if (key in obj) {
      obj[key] += 1;
    } else obj[key] = 1;
  }

  input.slice(1).forEach((el) => addKey(books, el));

  const sortedKeys = Object.keys(books).sort();
  let max = 0;
  let answer = sortedKeys[0];

  for (let sKey of sortedKeys) {
    if (books[sKey] > max) {
      max = books[sKey];
      answer = sKey;
    }
  }

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
