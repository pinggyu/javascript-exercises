const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++){
    sum += ar[i];
  }
  return sum;

  //const sum = ar.reduce((partialSum, i) => partialSum + i, 0);
};

const multiply = function(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++){
    result = (result * arr[i]);
  }
  return result;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	if (num < 0){
    return -1;
  } else if (num === 0){
    return 1;
  } else {
    return num * factorial(num - 1);
  }
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
