function nextdata(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
      var codePoint = str.charCodeAt(i);
      if (codePoint >= 65 && codePoint <= 90) {
        codePoint += 1;
        if (codePoint > 90) {
          codePoint -= 26;
        }
      } else if (codePoint >= 97 && codePoint <= 122) {
        codePoint += 1;
        if (codePoint > 122) {
          codePoint -= 26;
        }
      }
      if (codePoint >= 48 && codePoint <= 57) {
        codePoint += 1;
        if (codePoint > 57) {
          codePoint -= 10;
        }
      }
      result += String.fromCharCode(codePoint);
    }
    return result;
  }


console.log(nextdata('aBc'))