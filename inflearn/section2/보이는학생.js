function sol(arr) {
  const answer = [arr[0]];
  arr.forEach((elem) => {
    if (answer[answer.length - 1] < elem) {
      answer.push(elem);
    }
  });

  return answer;
}

const arr = [130, 135, 148, 140, 145, 150, 153, 150];
console.log(sol(arr));
