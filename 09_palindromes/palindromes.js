const palindromes = function (str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    return [...cleanStr].reverse().join('') === cleanStr
  };
  
  console.log(palindromes('racecar'));
  console.log(palindromes('racecar!'));
  console.log(palindromes('Racecar!'));
  console.log(palindromes('A car, a man, a maraca.'));
  console.log(palindromes('Animal loots foliated detail of stool lamina.'));
  console.log(palindromes('ZZZZ car, a man, a maracaz.'));
  console.log(palindromes('rac3e3car'));
  console.log(palindromes('r3ace3car'));

// Do not edit below this line
module.exports = palindromes;
