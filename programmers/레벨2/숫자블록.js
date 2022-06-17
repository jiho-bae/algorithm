function solution(begin, end) {
  const size = end - begin + 1;
  const arr = Array.from({ length: size }, (_, i) => begin + i);

  for (let i = size - 1; i >= 0; i--) {
    const cur = arr[i];
    if (cur === 1) {
      arr[i] = 0;
      continue;
    }

    const sqrt = Math.floor(Math.sqrt(cur));
    let isFind = false;

    for (let j = 2; j <= sqrt + 1; j++) {
      const portion = cur / j;
      const rest = cur % j;

      if (portion > 10 ** 7) continue;
      if (rest === 0) {
        arr[i] = portion;
        isFind = true;
        break;
      }
    }

    if (!isFind) arr[i] = 1;
  }

  return arr;
}

/*
    0으로 된 도로에 숫자블록 설치하기.
    블록번호가 n이면 n*2위치에 첫블록 설치.
    그다음은 n*3, n*4 순으로 진행.
    
    기존 블록이 깔려있다면 그 블록을 빼고 새로운 블록 넣기.
    길이 10억인 도로에, 1번블록부터 시작해서 1000만 블록까지 배치 완료.

    특정 구간에 어떤 블록이 깔려있는지 알고싶다면...?

    구간을 나타내는 begin, end에 깔린 숫자 배열을 리턴하기.

    1 <= begin <= end <= 10억. 
    end-begin <= 10000
*/
