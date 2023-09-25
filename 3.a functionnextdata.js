function nextdata(str) {
  return str.replace(/[a-zA-Z0-9]/g, function (match) {
    if (/[a-zA-Z]/.test(match)) {
      var codePoint = match.charCodeAt(0) + 1;

      if (codePoint > 90 && codePoint < 97) {
        codePoint = 65;
      } else if (codePoint > 122) {
        codePoint = 97;
      }

      return String.fromCharCode(codePoint);
    } else if (/[0-9]/.test(match)) {
      // Shift numbers cyclically by one
      var num = parseInt(match);
      if (num === 9) {
        return '0';
      } else {
        return (num + 1).toString();
      }
    }
  });
}

console.log(nextdata('aBc')); // Output: "bCd"
console.log(nextdata('aK89')); // Output: "bL90"
console.log(nextdata('xyz'));