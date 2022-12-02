function solution(want, number, discount) {
  let answer = 0;

  for (let i = 0, end = discount.length - 10; i <= end; i++) {
    const curNumber = [...number];

    for (let j = i; j < i + 10; j++) {
      const thingIdx = want.indexOf(discount[j]);

      if (thingIdx === -1 || curNumber[thingIdx] === 0) break;
      curNumber[thingIdx] -= 1;
    }

    if (curNumber.filter((e) => e).length > 0) continue;
    answer += 1;
  }

  return answer;
}

/**
 * 일정금액이상 = 10일간 회워자격.
 * 회원대상 매일 한가지 제품 할인.
 * 할인제품은 하루 1개 구매 가능.
 * 정현이는 원하는 제품, 수량이 할인하는 날짜와 10일연속 일치할때에 맞춰 가입하려함.
 * 정현이가 회원가입할 수 있는 기준날짜의 갯수를 리턴하자.
 * 하나도 없다면 0을 리턴한다.
 *
 * 1 <=원하는 제품 배열 want.length, 수량 number.length <= 10
 * 1<= number 원소 크기 <= 10
 * sum of numbers = 10.
 *
 * 10 <= discount.length <= 10만.
 * 1<= want 원소 길이, discount 원소 길이 <= 12
 *
 *
 * discount 배열에서 0부터 끝까지 탐색하기.
 * 10만개 * 10개 = 100만개.
 * if n번째에서 원하는 제품이 없다면, break.
 * n ~ n+10까지 탐색했다면? answer++
 */
