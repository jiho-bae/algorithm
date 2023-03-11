function solution(wallpaper) {
  const { MAX_SAFE_INTEGER, MIN_SAFE_INTEGER } = Number;
  const target = '#';
  let [lux, luy, rux, ruy] = [MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, MIN_SAFE_INTEGER, MIN_SAFE_INTEGER];

  wallpaper.forEach((row, rowIdx) => {
    [...row].forEach((cell, colIdx) => {
      if (cell !== target) return;

      lux = Math.min(lux, rowIdx);
      luy = Math.min(luy, colIdx);

      rux = Math.max(rux, rowIdx);
      ruy = Math.max(ruy, colIdx);
    });
  });

  return [lux, luy, rux + 1, ruy + 1];
}

/**
 * 머쓱이. 알고리즘 문제를 풀고 아무데나 저장해 둠.
 * 바탕화면이 너무 지저분해서 저장해둔 파일 전부 삭제 예정.
 * 컴퓨터 바탕화면은 각 칸이 정사각형인 격자.
 * 문자열 배열 wallpaper가 주어지면, 왼쪽위 (0,0)부터 시작해서 표현.
 * 각각 (세로, 가로)를 의미하고 빈칸은 ".", 파일이 있으면 "#"
* 드래그. S(lux, luy) -> E(rdx, rdy)일 때
* 드래그거리는 |rdx-lux| + |rdy-luy|
* 목표는 최소 거리로 모든 파일을 선택해서 한번에 삭제하는 것.

조건))
wallpaper 최대 50*50
적어도 1개의 파일 존재
행렬에는 . # 두개만 담긴다.
lux < rdx / luy < rdy 를 만족해야 함.


한번에 드래그하기 위해선..???
가장 왼쪽위 / 가장 오른쪽 아래에 위치한 파일들을 알아야 함.

그러므로 x,y 값의 각각 최소/최대를 파악해서
(최소x, 최소y) ~ (최대x, 최대y)의 값으로 드래그해주면 끝.

최소를 구할 때 x,y는 wallpaper의 등장값 그대로 쓴다.
(1행에 등장하는 파일이 실제 배열에서는 0행에 등장하므로)
최대를 구할 때는 wallpaper의 등장값에서 1을 더해줘야 한다
(1행에 등장하는 파일을 드래그하기 위해서는 실제 배열에서도 1행까지 드래그해야 한다.)

아무튼 맨 끝에 (rdx, rdy) 값에서 1씩 더해주면 된다.

*/
