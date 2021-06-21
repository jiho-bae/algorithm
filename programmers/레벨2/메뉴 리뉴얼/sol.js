function solution(orders, course) {
  const orderList = {};
  const answer = [];

  const getCombination = (n, arr) => {
    if (n === 1) return arr;
    const result = [];
    arr.forEach((val, idx) => {
      const comb = getCombination(n - 1, arr.slice(idx + 1));
      const totalComb = comb.map((c) => [val, ...c]);
      result.push(...totalComb);
    });
    return result;
  };

  orders.map((order) => {
    const orderArr = order.split("").sort();
    for (let i = 2; i <= orderArr.length; i++) {
      if (!course.includes(i)) continue;
      const orderComb = getCombination(i, orderArr);
      orderComb.forEach((oc) => {
        const str = oc.join("");
        if (orderList[str]) orderList[str] += 1;
        else orderList[str] = 1;
      });
    }
  });

  const orderListArr = Object.entries(orderList);
  course.map((c) => {
    const list = orderListArr.filter(
      ([str, cnt]) => str.length === c && cnt > 1
    );
    if (list.length) {
      const max = Math.max(...list.map((v) => v[1]));
      list.forEach(([str, cnt]) => {
        if (cnt === max) answer.push(str);
      });
    }
  });

  return answer.sort();
}
