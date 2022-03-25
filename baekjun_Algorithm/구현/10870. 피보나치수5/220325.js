function sol(n) {
  n = +n;
  const arr = [0, 1];
  function fibonacci(arr, n) {
    return arr[n - 2] + arr[n - 1];
  }

  for (let i = 2; i <= n; i++) {
    arr[i] = fibonacci(arr, i);
  }

  return arr[n];
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
