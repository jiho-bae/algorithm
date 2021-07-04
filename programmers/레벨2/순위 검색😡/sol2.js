function solution(info, query) {
  const answer = [];
  const dash = "-";
  const dict = {};
  for (let lang of ["cpp", "java", "python", dash]) {
    for (let job of ["frontend", "backend", dash]) {
      for (let career of ["junior", "senior", dash]) {
        for (let food of ["chicken", "pizza", dash]) {
          dict[`${lang}${job}${career}${food}`] = [];
        }
      }
    }
  }

  for (let iData of info) {
    const [l, j, c, f, score] = iData.split(" ");
    for (let lang of [l, dash]) {
      for (let job of [j, dash]) {
        for (let career of [c, dash]) {
          for (let food of [f, dash]) {
            dict[`${lang}${job}${career}${food}`].push(Number(score));
          }
        }
      }
    }
  }

  for (let key of Object.keys(dict)) {
    dict[key].sort((a, b) => a - b);
  }

  function binarySearch(arr, left, right, target) {
    if (!arr.length) {
      answer.push(0);
      return;
    }
    if (left === right) {
      if (arr[left] >= target) {
        answer.push(arr.length - left);
        return;
      }
      answer.push(arr.length - left - 1);
      return;
    }
    const mid = Math.ceil((left + right) / 2);
    if (arr[mid] >= target) binarySearch(arr, left, mid - 1, target);
    else if (arr[mid] <= target) binarySearch(arr, mid, right, target);
  }

  for (let qData of query) {
    qData = qData.split(" and ");
    const [lang, job, career, food, score] = [...qData.slice(0, 3), ...qData[3].split(" ")];
    const scores = dict[`${lang}${job}${career}${food}`];
    binarySearch(scores, 0, scores.length - 1, Number(score));
  }
  return answer;
}
