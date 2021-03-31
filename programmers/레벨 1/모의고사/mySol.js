function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const counts = [0, 0, 0];
  let answer = [];

  for (let i = 0; i < answers.length; i++) {
    answers[i] === first[i % first.length] ? counts[0]++ : null;
    answers[i] === second[i % second.length] ? counts[1]++ : null;
    answers[i] === third[i % third.length] ? counts[2]++ : null;
  }
  const max = Math.max(...counts);
  counts.forEach((count, index) =>
    count === max ? answer.push(index + 1) : null
  );
  return answer;
}
