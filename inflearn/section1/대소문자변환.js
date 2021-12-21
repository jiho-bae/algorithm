function sol(str) {
  return [...str]
    .map((word) => {
      let charCode = word.charCodeAt();
      charCode += word >= 'A' && word <= 'Z' ? 32 : -32;
      return String.fromCharCode(charCode);
    })
    .join('');
}

console.log(sol('HomeWORk'));
