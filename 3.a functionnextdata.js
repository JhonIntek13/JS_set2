function nextdata(str) {
  return str.replace(/[a-zA-Z]/g, function (match) {
    var codePoint = match.charCodeAt(0);

    if (/[A-Z]/.test(match)) {
      codePoint += 1;
      if (codePoint > 90) {
        codePoint -= 26;
      }
    } else if (/[a-z]/.test(match)) {
      codePoint += 1;
      if (codePoint > 122) {
        codePoint -= 26;
      }
    }

    return String.fromCharCode(codePoint);
  });
}

console.log(nextdata('aBc')); 
console.log(nextdata('aK89'));