function solution(n, m, section) {
  var answer = 0;
  const rollerLen = m - 1;
  let base = section[section.length - 1];
  let cur;

  answer += 1;

  while (section.length) {
    cur = section.pop();

    if (base - cur <= rollerLen) continue;
    base = cur;
    answer += 1;
  }

  return answer;
}

/**
 * 페인트가 칠해진 길이 n미터 벽.
벽 전체에 페인트칠하는 것 대신, 일부만 하기로 함.
벽을 1미터로 n개 구간으로 나누고, 칠해야 할 구역을 정함.
페인트 칠하는 롤러는 m미터이고,
- 롤러가 벽에서 벗어나면 안됨.
- 구역 일부분만 포함되도록 칠하면 안됨.

동일한 구역에 페인트를 여러번 칠해도 되지만,
페인트칠 횟수를 최소화 해야함.

1<=m <= n <= 10만
1<= section(페인트 칠해야 할 구역의 번호가 담긴 정수배열) <= n
1<= section 원소 <= n
section의 원소는 중복x, 오름차순 정렬

어떻게 칠하는게 효과적일까?
>> 그리디인듯.
>> 현재 롤러 m크기를 기준으로..
>> section을 한쪽 방향에서 반대방향으로 보면서
>> 현재 위치부터 롤러m 크기에 있는 모든 가능한 구역을 없앤다.
>> 롤러가 1이면, 현재구역만 칠할 수 있음.
>> 롤러가 3이면, 현재구역 + 최대 2거리만큼 가능.
>> section에 남은 원소가 없으면 끝내면 된다.
 */
