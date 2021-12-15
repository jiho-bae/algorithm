function solution(str) {
  const stack = [];

  [...str].forEach((word) => {
    if (word === stack[stack.length - 1]) stack.pop();
    else stack.push(word);
  });

  return stack.length ? 0 : 1;
}
