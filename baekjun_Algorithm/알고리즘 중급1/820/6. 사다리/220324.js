function sol(line) {
  let answer = -1;
  const sixDigits = 1000000;
  const nextDigits = 0.000001;
  const answerDights = 1000;
  const [x, y, c] = line.split(' ').map(Number);

  function findC(width) {
    const h1 = Math.sqrt(x ** 2 - width ** 2);
    const h2 = Math.sqrt(y ** 2 - width ** 2);
    const calculateC = (h1 * h2) / (h1 + h2);
    return c <= calculateC;
  }

  function binarySearch(start, end) {
    while (start <= end) {
      const mid = Math.floor(((start + end) / 2) * sixDigits) / sixDigits;

      if (findC(mid)) {
        answer = start;
        start = mid + nextDigits;
      } else {
        end = mid - nextDigits;
      }
    }
  }

  binarySearch(0, Math.max(x, y));

  return Math.ceil(answer * answerDights) / answerDights;
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
