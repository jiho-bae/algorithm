function solution(priorities, location) {
  let order = 0;

  while (priorities.length > 0) {
    let current = priorities.shift();

    if (priorities.filter((val) => val > current).length > 0) {
      priorities.push(current);
    } else {
      order++;
      if (location === 0) {
        return order;
      }
    }

    if (location > 0) {
      location--;
    } else {
      location = priorities.length - 1;
    }
  }
}
