function solution(str1, str2) {
  function J(A, B) {
    if (A.length === 0 && B.length === 0) return 1;
    const n = [];
    let u = A.length + B.length;
    if (A.length < B.length) [A, B] = [B, A];
    for (let i = 0; i < A.length; i++) {
      const idxB = B.indexOf(A[i]);
      if (idxB !== -1) {
        n.push(B.splice(idxB, 1));
      }
    }
    u -= n.length;
    return n.length / u;
  }

  function splitStr(str) {
    str = str.toUpperCase();
    const arr = [];
    for (let i = 0; i < str.length - 1; i++) {
      if (
        str[i] >= "A" &&
        str[i] <= "Z" &&
        str[i + 1] >= "A" &&
        str[i + 1] <= "Z"
      )
        arr.push(str[i] + str[i + 1]);
    }
    arr.sort();
    return arr;
  }

  const arr1 = splitStr(str1);
  const arr2 = splitStr(str2);
  let ans = parseInt(J(arr1, arr2) * 65536);
  return ans;
}
