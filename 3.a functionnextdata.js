function nextdata(str) {
  return str.replace(/[a-zA-Z0-9]/g, function (match) {
    var codePoint = match.charCodeAt(0);

    if ((codePoint >= 65 && codePoint < 90) || (codePoint >= 97 && codePoint < 122)) {
      codePoint++;
    } else if (codePoint === 90) {
      codePoint = 65;
    } else if (codePoint === 122) {
      codePoint = 97;
    } else if (!isNaN(parseInt(match))) {
      var num = parseInt(match);
      if (num === 9) {
        return '0';
      } else {
        return (num + 1).toString();
      }
    }

    return String.fromCharCode(codePoint);
  });
}

console.log(nextdata('aBc')); // Output: "bCd"
console.log(nextdata('aK89')); // Output: "bL90"
console.log(nextdata('xyz')); // Output: "yza"
