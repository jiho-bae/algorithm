function sol(n) {
  const set = new Set();
  set.add(1);
  for (let i = 2; i <= 1000; i++) {
    if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0) {
      set.add(i);
    }
  }

  const uglyNumber = [...set];
  return uglyNumber[n - 1];
}

sol(10); // 12
sol(4); // 4
