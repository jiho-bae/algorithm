function solution(array, commands) {
  const answer = commands.map((command) => {
    const [start, end, pick] = command;
    const arr = array
      .filter((value, index) => index >= start - 1 && index <= end - 1)
      .sort((a, b) => a - b);

    return arr[pick - 1];
  });

  return answer;
}
