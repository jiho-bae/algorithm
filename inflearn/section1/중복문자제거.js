function sol(s) {
  let answer = '';

  [...s].forEach((word) => {
    if (!answer.includes(word)) answer += word;
  });
  return answer;
}

function sol2(s) {
  let answer = '';

  [...s].forEach((word, idx) => {
    if (answer.indexOf(word) === idx) answer += word;
  });
  return answer;
}

console.log(sol('ksekkset'));
