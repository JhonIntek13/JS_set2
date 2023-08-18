function nextdata(str) {
  return str.replace(/[a-zA-Z]/g, function (match) {
    var codePoint = match.charCodeAt(0) + 1;

    if (codePoint > 90 && codePoint < 97) {
      codePoint = 65;
    } else if (codePoint > 122) {
      codePoint = 97;
    }

    return String.fromCharCode(codePoint);
  });
}

console.log(nextdata('aBc')); // Output: "bCd"
console.log(nextdata('aK89')); // Output: "bL89"
