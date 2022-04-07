function solution(enroll, referral, seller, amount) {
  const answer = new Array(enroll.length).fill(0);
  const enrollIdx = {};
  const sellerAmount = {};
  enroll.forEach((curEnroll, idx) => {
    enrollIdx[curEnroll] = idx;
    sellerAmount[curEnroll] = 0;
  });

  function getProfit(amount) {
    return amount * 100;
  }

  function isNotDivide(profit) {
    return Math.floor(profit * 0.1) < 1;
  }

  function divideProfit(profit) {
    const referralProfit = Math.floor(profit * 0.1);
    const sellerProfit = profit - referralProfit;

    return [referralProfit, sellerProfit];
  }

  function findEnrollIdx(enroll) {
    return enrollIdx[enroll];
  }

  function getReferral(idx) {
    return referral[idx];
  }

  seller.forEach((curSeller, idx) => {
    let curProfit = getProfit(amount[idx]);
    let sellerIdx = findEnrollIdx(curSeller);
    let curReferral = getReferral(sellerIdx);

    while (curReferral !== '-') {
      if (isNotDivide(curProfit)) break;
      const [referralProfit, sellerProfit] = divideProfit(curProfit);
      answer[sellerIdx] += sellerProfit;

      const referralIdx = findEnrollIdx(curReferral);
      curProfit = referralProfit;
      sellerIdx = referralIdx;
      curReferral = getReferral(sellerIdx);
    }

    const [_, finalProfit] = divideProfit(curProfit);
    answer[sellerIdx] += finalProfit;
  });

  return answer;
}
