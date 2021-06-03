const sol = (input) => {
  const N = +input[0];
  input = input.slice(1);
  const tree = {};
  for (let i = 0; i < N; i++) {
    const [node, left, right] = input[i].split(" ");
    tree[node] = [left, right];
  }

  let result = "";

  function preorder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    result += node;
    preorder(lt);
    preorder(rt);
  }
  function inorder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    inorder(lt);
    result += node;
    inorder(rt);
  }
  function postorder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    postorder(lt);
    postorder(rt);
    result += node;
  }

  preorder("A");
  result += "\n";
  inorder("A");
  result += "\n";
  postorder("A");
  return result;
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
