function solution(w, h) {
  for (let i = w <= h ? w : h; i > 0; i--) {
    if (w % i === 0 && h % i === 0) {
      return w * h - (w + h - i);
    }
  }
}

//
