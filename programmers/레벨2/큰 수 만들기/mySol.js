function solution(number, k) {
  const stack = [];
  for (let cur of number) {
    while (k > 0 && stack[stack.length - 1] < cur) {
      stack.pop();
      k--;
    }
    stack.push(cur);
  }
  stack.splice(stack.length - k, k);
  return stack.join("");
}
