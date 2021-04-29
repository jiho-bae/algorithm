/*
(연계형 문제 - 88번을 먼저 풀고 오셔야 합니다!)
제코베의 도움을 받아 성공적으로 지도를 만들어낸 지식이는 캐릭터의 움직임을 구현했습니다. 
하지만 지도 위의 캐릭터 위치를 나타내는데 문제가 발생했습니다.
지식이는 지도 위에서 캐릭터의 위치를 나타내기 위해 다시 한번 제코베에 도움을 요청합니다.

지도 위에서 캐릭터의 위치를 나타내주세요

1. 지도는 88번 문제의 해답을 사용해 주세요
2. 입력값은 지도, 캐릭터의 움직임입니다.
3. 캐릭터의 움직임은 { 상:1, 하:2, 좌:3, 우:4 }로 정수로 이루어진 배열이 들어갑니다.
4. 벽과 장애물은 통과할 수 없습니다. 
5. 마지막 캐릭터의 위치를 반영한 지도를 보여주고 위치를 반환하는 함수를 작성해 주세요.
*/

function makeMap(n, m, locat, obstacle) {
  let arr = Array.from(new Array(m + 2), () => new Array(n + 2).fill(0));
  for (let x = 0; x < m + 2; x++) {
    for (let y = 0; y < n + 2; y++) {
      if (x === 0 || (y === 0) | (x === m + 1) | (y === n + 1)) arr[x][y] = 2;
    }
  }
  arr[locat[0] + 1][locat[1] + 1] = 1;
  for (let [x, y] of obstacle) {
    arr[x + 1][y + 1] = 2;
  }
  return arr;
}

let n = 4;
let m = 5;
let locat = [0, 0];
let obstacle = [
  [0, 1],
  [1, 1],
  [2, 3],
  [1, 3],
];

let map = makeMap(n, m, locat, obstacle);
let move = [1, 2, 2, 2, 4, 4, 4];

function movedMap(map, move) {
  let dx = [0, -1, 1, 0, 0];
  let dy = [0, 0, 0, -1, 1];
  let distance;
  for (let x = 0; x < map.length; x++) {
    if (map[x].includes(1)) {
      let y = map[x].indexOf(1);
      distance = [x, y];
      break;
    }
  }

  for (let i of move) {
    let nx = distance[0] + dx[i];
    let ny = distance[1] + dy[i];
    if (map[nx][ny] === 2) continue;
    else {
      map[distance[0]][distance[1]] = 0;
      map[nx][ny] = 1;
      distance = [nx, ny];
    }
  }
  return map;
}

movedMap(map, move);
