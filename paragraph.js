function toLeetSpeak(text) {
  const mappings = {
    a: '4',
    b: '13',
    c: '(',
    d: '|)',
    e: '3',
    f: '|=',
    g: '6',
    h: '#',
    i: '1',
    j: '_|',
    k: '|<',
    l: '1',
    m: '|\\/|',
    n: '|\\|',
    o: '0',
    p: '|*',
    q: '(_,)',
    r: '|2',
    s: '5',
    t: '7',
    u: '|_|',
    v: '\\/',
    w: '\\/\\/',
    x: '><',
    y: '`/',
    z: '2'
  };

  return text.replace(/[a-z]/gi, (match) => {
    const replacement = mappings[match.toLowerCase()] || match;
    return match === match.toUpperCase() ? replacement.toUpperCase() : replacement;
  });
}
function findWordPalindromes(text) {
    const regex = /\b(\w+)(?=\W*\1\b)/gi;
    return text.match(regex);
  }
  
  const paragraph = 'A man, a plan, a canal, Panama. Madam Arora teaches malayalam. Was it a car or a cat I saw?';
  const palindromes = findWordPalindromes(paragraph);
  console.log(palindromes);
  
const leetText = toLeetSpeak(paragraph);
console.log(leetText);

