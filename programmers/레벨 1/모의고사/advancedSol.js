function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const counts = [];
  counts[0] = answers.filter(
    (answer, index) => answer === first[index % first.length]
  ).length;
  counts[1] = answers.filter(
    (answer, index) => answer === second[index % second.length]
  ).length;
  counts[2] = answers.filter(
    (answer, index) => answer === third[index % third.length]
  ).length;
  const max = Math.max(...counts);

  counts.forEach((count, index) =>
    count === max ? answer.push(index + 1) : null
  );
  return answer;
}
