function sol(input) {
  let [d, num] = input[0].split(' ');
  d = +d;
  let [x, y] = input[1].split(' ').map(Number);
  const dirObj = {
    stop: 0,
    left: 1,
    right: -1,
    up: 2,
    down: -2,
  };
  let answer = false;

  function move(num, dir) {
    switch (dir) {
      case dirObj.stop:
        return [num, 0];
      case dirObj.left:
        if (num === 1) return [2, 0];
        else if (num === 4) return [3, 0];
        else if (num === 2) return [1, dir];
        else return [4, dir];
      case dirObj.right:
        if (num === 1) return [2, dir];
        else if (num === 4) return [3, dir];
        else if (num === 2) return [1, 0];
        else return [4, 0];
      case dirObj.up:
        if (num === 1) return [4, dir];
        else if (num === 4) return [1, 0];
        else if (num === 2) return [3, dir];
        else return [2, 0];
      case dirObj.down:
        if (num === 1) return [4, 0];
        else if (num === 4) return [1, dir];
        else if (num === 2) return [3, 0];
        else return [2, dir];
    }

    return [-1, 0];
  }

  while (!(x === 0 && y === 0)) {
    if (answer) break;

    let dir;
    let idx = d - 1;
    let changeNum = '';

    if (x !== 0) {
      dir = x > 0 ? dirObj.right : dirObj.left;
      x = x > 0 ? x - 1 : x + 1;

      while (dir !== 0 && idx !== -1) {
        const [result, nextDir] = move(+num[idx], dir);
        if (result === -1) {
          answer = true;
          break;
        }
        changeNum = result + changeNum;
        dir = nextDir;
        idx--;
      }

      if (dir !== 0 && idx === -1) {
        answer = true;
        break;
      } else {
        num = num.slice(0, idx + 1) + changeNum;
      }
    }

    if (answer) break;

    if (y !== 0) {
      idx = d - 1;
      changeNum = '';
      dir = y > 0 ? dirObj.up : dirObj.down;
      y = y > 0 ? y - 1 : y + 1;

      while (dir !== 0 && idx !== -1) {
        const [result, nextDir] = move(+num[idx], dir);
        if (result === -1) {
          answer = true;
          break;
        }
        changeNum = result + changeNum;
        dir = nextDir;
        idx--;
      }

      if (dir !== 0 && idx === -1) {
        answer = true;
        break;
      } else {
        num = num.slice(0, idx + 1) + changeNum;
      }
    }
  }
  return answer ? -1 : num;
}

const input = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    console.log(sol(input));
    process.exit();
  });
