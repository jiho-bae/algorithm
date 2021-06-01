const sol = (input) => {
  const N = +input[0];
  input = input.slice(1);
  const tree = {};
  for (let i = 0; i < N; i++) {
    const [node, lt, rt] = input[i].split(" ");
    tree[node] = [lt, rt];
  }

  let answer = "";
  function preorder(root) {
    if (root === ".") return;
    const [lt, rt] = tree[root];
    answer += `${root}`;
    preorder(lt);
    preorder(rt);
  }
  function inorder(root) {
    if (root === ".") return;
    const [lt, rt] = tree[root];
    inorder(lt);
    answer += `${root}`;
    inorder(rt);
  }
  function postorder(root) {
    if (root === ".") return;
    const [lt, rt] = tree[root];
    postorder(lt);
    postorder(rt);
    answer += `${root}`;
  }

  preorder("A");
  answer += "\n";
  inorder("A");
  answer += "\n";
  postorder("A");
  return answer;
};

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(sol(input));
    process.exit();
  });
