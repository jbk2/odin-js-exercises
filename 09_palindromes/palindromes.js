const palindromes = function (string) {
  let lowercase = string.toLowerCase();
  let strippedString = lowercase.replace(/[^a-z0-9]/gi, '');
  let reversedString = strippedString.split('').reverse().join('');
  return strippedString == reversedString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
