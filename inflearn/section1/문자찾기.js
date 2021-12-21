function sol(str, alphabet) {
  return str.split(alphabet).length - 1;
}

console.log(sol('qwertyt', 't'));
console.log(sol('qwertyt', ' '));
