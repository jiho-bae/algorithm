function solution(user_id, banned_id) {
  let answer = 0;
  const banList = {};

  banned_id.forEach((banId) => {
    if (banList[banId]) {
      banList[banId].cnt += 1;
      return;
    }
    banList[banId] = {
      list: new Array(),
      cnt: 1,
    };
    const banIdLen = banId.length;

    user_id.forEach((uId) => {
      let isBanned = true;
      const uIdLen = uId.length;
      if (uIdLen !== banIdLen) return;

      for (let i = 0; i < uIdLen; i++) {
        if (banId[i] === '*') continue;
        if (banId[i] !== uId[i]) {
          isBanned = false;
          break;
        }
      }

      if (isBanned) {
        banList[banId].list.push(uId);
      }
    });
  });

  const fixedBanList = [];
  Object.entries(banList).forEach(([key, { list, cnt }]) => {
    if (list.length === cnt) {
      fixedBanList.push(...list);
      delete banList[key];
    }
  });
  const fixedBanLength = fixedBanList.length;

  const candidates = Object.values(banList);
  let candidateSet = new Set();
  const cntCandiates = candidates.reduce((acc, { list, cnt }) => {
    list.forEach((li) => candidateSet.add(li));
    return acc + cnt;
  }, 0);
  candidateSet = [...candidateSet];

  function dfs(L, arr, idx) {
    if (L === cntCandiates) {
      const newBanList = new Set([...fixedBanList, ...arr]);
      if (newBanList.size === fixedBanLength + arr.length) answer += 1;
      return;
    }

    for (let i = idx; i < candidateSet.length; i++) {
      dfs(L + 1, [...arr, candidateSet[i]], i + 1);
    }
  }

  dfs(0, [], 0);

  return answer;
}
