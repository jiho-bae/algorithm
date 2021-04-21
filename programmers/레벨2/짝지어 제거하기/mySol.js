function solution(s) {
  const stack = [];
  for (let x of s) {
    if (stack[stack.length - 1] === x) stack.pop();
    else stack.push(x);
  }
  if (!stack.length) return 1;
  return 0;
}
