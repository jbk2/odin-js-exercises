const fibonacci = function(n) {
  n = parseInt(n);
  let a = 1, b = 1;

  if(n < 0) return "OOPS";
  if (n === 0) return 0;


  for(let i = 2; i < n; i++) {
    const next = a + b;
    a = b;
    b = next;
  };
  
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
