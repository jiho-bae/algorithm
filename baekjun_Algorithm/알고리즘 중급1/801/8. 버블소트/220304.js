function sol(input) {
  const N = +input[0];
  const series = input[1].split(' ').map(Number);
  const transSeries = new Array(N);

  function mergeSort(start, end) {
    if (start === end) return 0;

    const mid = Math.floor((start + end) / 2);
    let result = mergeSort(start, mid) + mergeSort(mid + 1, end);

    let i = start;
    let j = mid + 1;
    let idx = 0;

    while (i <= mid || j <= end) {
      if (i <= mid && (j > end || series[i] <= series[j])) {
        transSeries[idx] = series[i];
        i++;
      } else {
        result += mid - i + 1;
        transSeries[idx] = series[j];
        j++;
      }
      idx++;
    }

    for (let k = start; k <= end; k++) {
      series[k] = transSeries[k - start];
    }
    return result;
  }

  const answer = mergeSort(0, N - 1);
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
