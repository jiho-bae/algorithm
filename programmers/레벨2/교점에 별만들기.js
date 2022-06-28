function findIntersection(lineA, lineB) {
  const [A, B, E] = lineA;
  const [C, D, F] = lineB;

  if (A * D - B * C === 0) return false;
  const x = (B * F - E * D) / (A * D - B * C);
  const y = (E * C - A * F) / (A * D - B * C);

  if (x === Math.floor(x) && y === Math.floor(y)) return `${x}/${y}`;
  return false;
}

function findEdges(candidates) {
  let top = Number.MIN_SAFE_INTEGER;
  let right = Number.MIN_SAFE_INTEGER;
  let bottom = Number.MAX_SAFE_INTEGER;
  let left = Number.MAX_SAFE_INTEGER;

  candidates.forEach(([x, y]) => {
    top = Math.max(top, y);
    right = Math.max(right, x);
    bottom = Math.min(bottom, y);
    left = Math.min(left, x);
  });

  return [top, right, bottom, left];
}

function solution(line) {
  let candidates = new Set();
  const n = line.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const result = findIntersection(line[i], line[j]);
      if (result) {
        candidates.add(result);
      }
    }
  }

  candidates = [...candidates].map((xyStr) => xyStr.split('/').map(Number));
  if (candidates.length === 1) return ['*'];
  const [top, right, bottom, left] = findEdges(candidates);

  const boards = Array.from({ length: top - bottom + 1 }, () =>
    new Array(right - left + 1).fill('.')
  );
  candidates.forEach(([x, y]) => (boards[top - y][x - left] = '*'));

  return boards.map((board) => board.join(''));
}

/* 
    Ax+By+C 의 n개 직선이 주어짐.
    그래서 n개의 직선의 교점을 모두 찾고,
    정수로 표현되는 교점만 추려낸다.

    정수로 표현된 교점을 x,y좌표에 나타내서,
    모든 별을 포함하는 최소한의 격자를 리턴한다.

    sol)
    교점 후보들을 찾는다.
    
    찾으려면... x=(BF-ED)/(AD-BC), y=(EC-AF)/(AD-BC)

    후보가 1이면 "*"을 리턴하고 끝낸다.
    외곽선을 이룰 topleft, topright, downleft, downright를 찾는다.
    해당 크기만큼 격자를 선언하고.... topleft=(0,0), topright=(0,n), downleft=(n,0), downright=(n,n)으로 좌표를 변경해주고...
    격자를 이루는 배열에서 교점 후보들을 찍어주고.. 리턴하면..?
*/
