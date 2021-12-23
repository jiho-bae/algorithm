function sol(a, b) {
  const answer = [];
  a.forEach((elem, idx) => {
    if (elem === b[idx]) answer.push('D');
    else if (elem > b[idx] && !(elem === 3 && b[idx] === 1)) answer.push('A');
    else answer.push('B');
  });
  return answer;
}

const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];
console.log(sol(a, b));
