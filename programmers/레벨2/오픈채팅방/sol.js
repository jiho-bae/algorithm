function solution(record) {
  const users = {};
  const orders = [];

  for (let rec of record) {
    const [cmd, uid, nickname] = rec.split(" ");
    if (cmd === "Enter") {
      users[uid] = nickname;
      orders.push([cmd, uid]);
    } else if (cmd === "Leave") {
      orders.push([cmd, uid]);
    } else if (cmd === "Change") {
      users[uid] = nickname;
    }
  }

  const results = [];
  for (let order of orders) {
    const [cmd, uid] = order;
    if (cmd === "Enter") {
      results.push(`${users[uid]}님이 들어왔습니다.`);
    } else if (cmd === "Leave") {
      results.push(`${users[uid]}님이 나갔습니다.`);
    }
  }
  return results;
}
