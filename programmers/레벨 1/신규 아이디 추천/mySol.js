function solution(new_id) {
  new_id = new_id.toLowerCase();
  new_id = [...new_id].filter((value) => /[a-z]|[0-9]|\-|\_|\./.test(value));
  new_id = new_id.join("");

  while (true) {
    if (new_id.indexOf("..") === -1) {
      break;
    } else {
      new_id = new_id.replace("..", ".");
    }
  }

  if (new_id[0] === ".") new_id = new_id.substring(1);
  if (new_id.length && new_id[new_id.length - 1] === ".") {
    new_id = new_id.substring(0, new_id.length - 1);
  }

  if (new_id === "") {
    new_id = "aaa";
  } else if (new_id.length >= 16) {
    new_id = new_id.substring(0, 15);
  }

  if (new_id[new_id.length - 1] === ".") {
    new_id = new_id.substring(0, new_id.length - 1);
  }

  while (new_id.length <= 2) {
    new_id = new_id.concat(new_id[new_id.length - 1]);
  }
  return new_id;
}
