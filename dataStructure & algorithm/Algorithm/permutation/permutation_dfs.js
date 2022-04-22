const answer = [];
const strArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const arrLen = strArr.length;

const visits = new Array(arrLen).fill(0);

function permutationDFS(L, arr) {
  if (L === arrLen) {
    answer.push([...arr]);
    return;
  }

  for (let i = 0; i < arrLen; i++) {
    if (visits[i]) continue;
    visits[i] = 1;
    permutationDFS(L + 1, [...arr, strArr[i]]);
    visits[i] = 0;
  }
}

permutationDFS(0, []);

console.log(answer);
