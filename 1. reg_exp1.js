// Example strings for each regular expression pattern
var regexA = /.abc/;
var stringA = "xabc";

const regexB = /^a+b!!1\{4\}/;
const stringB = "aaaab!!1{4}";

var regexC = /.{3}a\.b/;
var stringC = "xyz.a.b";

var regexD = /\w/;
var stringD = "x";

var regexE = /\s/;
var stringE = " ";

var regexF = /\d/;
var stringF = "7";

var regexG = /./;
var stringG = "x";

var regexH = /[abc]/;
var stringH = "a";

var regexI = /(abc)/;
var stringI = "abc";

var regexJ = /[a-zA-Z_\$\.]+[A-Za-z_\$0-9\.]*@[a-zA-Z_\$\.]+[a-zA-Z_\$0-9\.]*\.(com|net|org){1}/;
    var stringJ = "example_email123@domain.com";

var regexK = /\(N _ N\)/;
var stringK = "(N _ N)";

// Test
console.log(regexA.test(stringA));
console.log(regexB.test(stringB));
console.log(regexC.test(stringC));
console.log(regexD.test(stringD));
console.log(regexE.test(stringE));
console.log(regexF.test(stringF));
console.log(regexG.test(stringG));
console.log(regexH.test(stringH));
console.log(regexI.test(stringI));
console.log(regexJ.test(stringJ));
console.log(regexK.test(stringK));
