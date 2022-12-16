function sol(input) {
  const N = +input[0];
  const mixed = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  let acid = mixed.findIndex((val) => val >= 0);

  function calcDiffAndMinDiff(lt, rt) {
    const diff = mixed[lt] + mixed[rt];

    if (Math.abs(diff) < minDiff) {
      minDiff = Math.abs(diff);
      minIdx.lt = lt;
      minIdx.rt = rt;
    }
    return diff;
  }

  function getAnswer(lt, rt) {
    return `${mixed[lt]} ${mixed[rt]}`;
  }

  if (acid === 0) {
    return getAnswer(0, 1);
  } else if (acid === -1) {
    return getAnswer(N - 2, N - 1);
  }

  let alkali = acid - 1;
  let minDiff = Math.abs(mixed[acid] + mixed[alkali]);
  const minIdx = {
    lt: alkali,
    rt: acid,
  };

  if (acid < N - 1) {
    calcDiffAndMinDiff(acid, acid + 1);
  }
  if (alkali > 0) {
    calcDiffAndMinDiff(alkali, alkali + 1);
  }

  while (alkali >= 0 && acid < N) {
    const diff = calcDiffAndMinDiff(alkali, acid);

    if (diff === 0) {
      return getAnswer(alkali, acid);
    } else if (diff > 0) {
      alkali -= 1;
    } else {
      acid += 1;
    }
  }

  return getAnswer(minIdx.lt, minIdx.rt);
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

/**
 * 오름차순 정렬 후.
 * 알칼리의 최댓값(0에 가까운 음수), 산성의 최솟값(0이상 최솟값)을 구한다.
 * 1. 산성만 있으면 산성 최솟값 2개가 정답.
 * 2. 알칼리도 마찬가지로 알칼리만 있으면 알칼리 최댓값 2개가 정답.
 * 3. 알칼리, 산성을 최솟값부터 더해준다.
 *    - 차이가 0이면 정답.
 *    - 차이가 양수면 알칼리를 더 작은 음수로 변경한다.
 *    - 차이가 음수면 산성을 더 큰 양수로 변경한다.
 *    - 산성 첫번째, 두번째 합을 포함한다.
 *    - 알칼리 첫번째, 두번째 합을 포함한다.
 *    - 정답을 구한다.
 */
