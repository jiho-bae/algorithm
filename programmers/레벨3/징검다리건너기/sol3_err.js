/* 
    효율성 13번을 해결해보자.
    지금은 a부터 a+k까지 탐색하고 a+1로만 이동했다면, 또 a+1+k까지 탐색해야 한다.
    아마 이런 비효율적인 탐색때문에 효율성13 해결이 안되는 것 같으니...
    
    이미 방문했던 인덱스를 다시 방문하지 않기 위해서는...
    cursor ~ cursor+k의 값을 탐색할 때
    max를 발견하면 이전 max를 prevMax로 저장하고,
    새로운 max, cursor 기반 탐색할 때 현재 cursor부터 탐색하는 것이 아니라,
    prevCursor + k + 1(=prevEnd) ~ newCursor + k 까지 탐색하면, 결국 stones 배열 크기만큼만 탐색하게 된다.
    
    ㅈㄴ어려움.
*/

function NextMax() {
  this.arr = [];
  this.idx = [];
  this.elems = new Array(200001).fill(0);
  this.order = 0;

  this.init = function () {
    this.arr = [];
    this.idx = [];
    this.order = 0;
    this.elems.fill(0);
  };

  this.push = function (data, idx) {
    this.arr.push(data);
    this.idx.push(idx);
    this.elems[data] += 1;
  };

  this.shift = function () {
    if (this.arr.length === this.order) {
      return [Number.MIN_SAFE_INTEGER, -1];
    }

    this.elems[this.arr[this.order]] -= 1;
    return [this.arr[this.order], this.idx[this.order++]];
  };

  this.firstElem = function () {
    return this.arr[this.order] || 0;
  };

  this.setStartPoint = function () {
    if (this.arr.length - this.order < 2) return;

    const firstElem = this.arr[this.order];
    if (this.elems[firstElem] === 1) return;

    this.order = this.arr.lastIndexOf(firstElem);
  };
}

function solution(stones, k) {
  const len = stones.length;
  const MIN_SAFE_INT = Number.MIN_SAFE_INTEGER;
  let cnt = MIN_SAFE_INT;
  let cursor = -1;

  for (let i = 0; i < k; i++) {
    if (stones[i] >= cnt) {
      cnt = stones[i];
      cursor = i;
    }
  }

  const nextMax = new NextMax();
  let prevEnd = cursor + 1;

  while (cursor + k < len) {
    nextMax.setStartPoint();

    let [max, maxIdx] = nextMax.shift();
    const curEnd = Math.min(cursor + 1 + k, len);

    for (let i = prevEnd; i < curEnd; i++) {
      const stone = stones[i];

      if (stone >= max || stone >= cnt) {
        max = stone;
        maxIdx = i;
        nextMax.init();
      } else if (stone >= nextMax.firstElem()) {
        nextMax.init();
        nextMax.push(stone, i);
      } else {
        nextMax.push(stone, i);
      }
    }

    prevEnd = curEnd;
    cursor = maxIdx;
    cnt = Math.min(cnt, max);
  }

  return cnt;
}
