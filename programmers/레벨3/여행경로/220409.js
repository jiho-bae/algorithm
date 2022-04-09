function solution(tickets) {
  const destLength = tickets.length + 1;
  const destinations = {};

  for (ticket of tickets) {
    const [from, to] = ticket;
    if (!destinations[from]) {
      destinations[from] = [[to, 1]];
    } else {
      destinations[from].push([to, 1]);
    }
  }

  Object.values(destinations).forEach((destination) => destination.sort());

  let answer;
  let current = 'ICN';
  let isDetected = false;

  function dfs(current, arr) {
    if (isDetected) return;

    const nextDestinations = destinations[current];
    if (
      !nextDestinations ||
      !nextDestinations.reduce((acc, val) => acc + val[1], 0)
    ) {
      if (destLength === arr.length) {
        answer = arr;
        isDetected = true;
      }
      return;
    }

    for (let i = 0; i < nextDestinations.length; i++) {
      if (!nextDestinations[i][1]) continue;
      nextDestinations[i][1] = 0;
      dfs(nextDestinations[i][0], [...arr, nextDestinations[i][0]]);
      nextDestinations[i][1] = 1;
    }
  }

  dfs(current, [current]);

  return answer;
}
