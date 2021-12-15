function solution(record) {
  const uidObj = {};
  const actions = [];
  const actionObj = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.',
  };

  record.forEach((rcd) => {
    const [action, uid, nickname] = rcd.split(' ');
    if (action !== 'Change') actions.push([action, uid]);
    if (nickname) uidObj[uid] = nickname;
  });

  const answer = actions.map(
    ([action, uid]) => `${uidObj[uid]}${actionObj[action]}`
  );
  return answer;
}
