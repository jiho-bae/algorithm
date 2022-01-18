function sol(input) {
  const [n, str] = input;
  const cardPrices = str.split(' ').map(Number);
  cardPrices.unshift(0);

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      cardPrices[i] = Math.min(
        cardPrices[i - j] + cardPrices[j],
        cardPrices[i]
      );
    }
  }

  return cardPrices[n];
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
