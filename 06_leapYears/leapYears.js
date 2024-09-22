const leapYears = function(year) {
  if(divisibleByFourHundered(year)) {
    return true;
  } else if (divisibleByFour(year) && !divisibleByOneHundered(year)) {
    return true;
  } else {
    return false;
  }
};

function divisibleByFour(n) {
  return n % 4 === 0;
};

function divisibleByOneHundered(n) {
  return n % 100 === 0;
};

function divisibleByFourHundered(n) {
  return n % 400 === 0;
};

// Do not edit below this line
module.exports = leapYears;
