function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (answer.indexOf(sum) === -1) {
        answer.push(sum);
      }
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}

// Sort : 디폴트로 문자열 정렬을 행하므로, [1,2,111].sort()의 결과는 [1,111,2]가 됨을 유의한다.
