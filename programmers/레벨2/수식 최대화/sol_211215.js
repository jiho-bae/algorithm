function calculator(a, b, oper) {
  switch (oper) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
  }
}

function getCombinations(operations) {
  const operLen = operations.length;
  const combinations = [];

  for (let i = 0; i < operLen; i++) {
    for (let j = 0; j < operLen; j++) {
      for (let k = 0; k < operLen; k++) {
        if (i !== j && j !== k && i !== k)
          combinations.push([i, j, k].map((idx) => operations[idx]));
      }
    }
  }
  return combinations;
}

function solution(expression) {
  const operations = ['+', '*', '-'];
  const combinations = getCombinations(operations);
  let answer = Number.MIN_SAFE_INTEGER;

  combinations.forEach((comb) => {
    const operands = expression.match(/[0-9]+/g).map(Number);
    const operators = expression.match(/[*+-]/g);
    comb.forEach((c) => {
      let idx = operators.indexOf(c);
      while (idx !== -1) {
        operands[idx] = calculator(operands[idx], operands[idx + 1], c);
        operands.splice(idx + 1, 1);
        operators.splice(idx, 1);
        idx = operators.indexOf(c);
      }
    });
    answer = Math.max(answer, Math.abs(operands));
  });

  return answer;
}

module.exports = solution;
