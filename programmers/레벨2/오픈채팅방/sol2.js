function solution(record) {
  const users = {};
  const cmds = [];
  const cmdObj = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  for (let rec of record) {
    const [cmd, uid, nickname] = rec.split(" ");
    if (nickname) users[uid] = nickname;
    if (cmd !== "Change") cmds.push([cmd, uid]);
  }

  return cmds.map(([cmd, uid]) => `${users[uid]}${cmdObj[cmd]}`);
}
