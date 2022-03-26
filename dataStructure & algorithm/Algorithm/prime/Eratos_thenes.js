const arr = Array.from({ length: 10000 }, (_, i) => i);
arr[1] = 0;

function primeNumber(num) {
  for (let i = 2; i <= num; i++) {
    if (arr[i] === 0) continue;
    for (let j = 2 * i; j <= num; j += i) {
      arr[j] = 0;
    }
  }
}

primeNumber(9999);
