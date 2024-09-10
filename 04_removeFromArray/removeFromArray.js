const removeFromArray = function() {
  let noOfElementsToCheck = arguments.length - 1;
  let array = arguments[0];
  for(let i = 1; i <= noOfElementsToCheck; i++) {
    let valueToCheck = arguments[i]
    array = array.filter((element) => element !== valueToCheck)
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
