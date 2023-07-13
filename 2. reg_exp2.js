// A. Date format <Month-string> <##day>, <####year>
const regexA = /^(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, \d{4}$/;
const stringA = "September 29, 1972";
console.log(regexA.test(stringA));

// B. A letter followed OR preceded by a number
const regexB = /\d[a-zA-Z]|[a-zA-Z]\d/;
const stringB = "A52";
console.log(regexB.test(stringB));

// C. txt, java, and cpp files with names consisting of only letters
const regexC = /^[a-zA-Z]+\.(txt|java|cpp)$/;
const stringC = "test.java";
console.log(regexC.test(stringC));

// D. A 5 character palindrome
const regexD = /^(\w)(\w)(\w)\2\1$/;
const stringD = "abcba";
console.log(regexD.test(stringD)); 


// E. All words that consist of letters from b to y only
const regexE =  /\b[b-y]+\b/gi;
const stringE = "Bee zapp Crow Eagle Zorro mouse Ape you";
console.log(stringE.match(regexE));

// F. All the non-nested tag elements in a string
const regexF = /<(\w+)[^>]*>(.*?)<\/\1>/g;
const stringF = "Is <b>4 <-1/12</b> true? The <b>answer</b> will <em>surprise</em> you.";
console.log(stringF.match(regexF));
