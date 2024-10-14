const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  let sum = 0;
  array.forEach((e) => {
    sum += e;
  });
  return sum;
};

const multiply = function(array) {
  return array.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
  }, 1);
};

// const power = function(a, b) {
//   let sum = 0
//   for(let i = 0; i < b; i++) {
//     sum = sum + (a * a);
//   };
//   return sum;
// };

// or:

const power = function(a, b){
  return a ** b;
};


const factorial = function(n) {
  let product = 1;
  for(let i = 1; i <= n; i++) {
    product *= i;
  };
	return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
