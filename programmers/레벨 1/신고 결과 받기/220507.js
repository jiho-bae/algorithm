function solution(id_list, report, k) {
  const answer = new Array(id_list.length).fill(0);
  const reportedUser = {};

  id_list.forEach((userId, idx) => {
    reportedUser[userId] = { idx, reporterList: new Set() };
  });

  report.forEach((reportStr) => {
    const [reporter, target] = reportStr.split(' ');
    if (!reportedUser[target].reporterList.has(reporter)) {
      reportedUser[target].reporterList.add(reporter);
    }
  });

  Object.values(reportedUser).forEach(({ reporterList }) => {
    if (reporterList.size >= k) {
      for (let user of reporterList) {
        const targetIdx = reportedUser[user].idx;
        answer[targetIdx] += 1;
      }
    }
  });

  return answer;
}
