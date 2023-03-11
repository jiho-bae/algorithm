function solution(keymap, targets) {
  var answer = [];
  const keyPos = {};

  keymap.forEach((km) => {
    [...km].forEach((alphabet, pos) => {
      if (!(alphabet in keyPos)) {
        keyPos[alphabet] = pos + 1;
      } else {
        keyPos[alphabet] = Math.min(keyPos[alphabet], pos + 1);
      }
    });
  });

  targets.forEach((target) => {
    let click = 0;

    [...target].forEach((alphabet) => {
      if (click === -1) return;

      if (!(alphabet in keyPos)) {
        click = -1;
      } else {
        click += keyPos[alphabet];
      }
    });

    answer.push(click);
  });

  return answer;
}

/**
 * 휴대폰 자판은 하나의 자판에 여러 문자가 할당된다.
키 하나에 여러 문자가 있으면, 빠르게 누르면서 문자를 바꾼다.
휴대폰 자판마다 키가 1~100개까지 있을 수 있다.
특정 키를 눌렀을 때 입력되는 문자도 무작위다.

같은 문자가 자판 전체에 여러번 할당될 수도 있고,
키 하나에 같은 문자가 여러 번 할당될 수도 있다.
아예 할당되지 않았을수도 있다..(몇몇 문자열은 작성 불가능할지도.)

휴대폰 자판을 이용해 특정 문자열을 작성할 때,
키를 최소 몇번 눌러야 그 문자열을 작성할 수 있는지 알아보자.

keymap : 1번키부터 차례대로 할당된 문자들이 순서대로 담긴 문자열 배열.
targets : 입력하려는 문자열들이 담긴 문자열배열

각 문자열 작성을 위해 "키를 최소한 몇번 눌러야하는지" 순서대로 배열에 담아 리턴.
목표달성이 불가능하면 -1 저장.

1<=keymap.length<=100
1<=keymap 원소길이<=100
keymap[i]는 i+1번 키를 눌렀을 때 바뀌는 문자이다.
keymap 원소 길이는 서로 다르고, 알파벳 대문자로만 이루어짐.

1<=targets.length<=100
1<=targets 원소 길이<=100

풀이))
targets에 있는 문자열을 완성시켜야 한다.
그러기 위해선 targets 문자열들의 각 문자들이 keymap 어디에 위치하는지 알아야 하는데,
keymap을 통해 문자열들의 최소 클릭횟수를 저장해둔다.
이것을 keyPosition이라는 객체에 저장해두고,

targets 문자열마다 문자열의 각 문자들을 keyPosition 객체를 통해 최소클릭횟수를 더한다.
최소값들을 다 더한 것이 해당 문자열의 클릭 최소값이고,
만약 keyPosition에 없는 문자를 포함한다면 -1을 담아줘보자.
 * 
 */
