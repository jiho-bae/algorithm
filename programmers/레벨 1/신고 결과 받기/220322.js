function solution(id_list, report, k) {
  const userCnt = id_list.length;
  const answer = new Array(userCnt).fill(0);

  const reportUserIdx = {};
  const reportedUserObj = {};

  id_list.forEach((id, idx) => (reportUserIdx[id] = idx));

  report.forEach((reportStr) => {
    const [reportUser, reportedUser] = reportStr.split(' ');
    if (reportedUserObj[reportedUser]) {
      if (reportedUserObj[reportedUser].includes(reportUser)) return;
      reportedUserObj[reportedUser].push(reportUser);
    } else {
      reportedUserObj[reportedUser] = [reportUser];
    }
  });

  Object.values(reportedUserObj).forEach((reportUserArr) => {
    if (reportUserArr.length >= k) {
      for (let user of reportUserArr) {
        answer[reportUserIdx[user]] += 1;
      }
    }
  });

  return answer;
}
