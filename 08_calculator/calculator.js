const add = function(l, r) {
	let out = l + r;
  return out;
};

const subtract = function(l, r) {
  let out = l - r;
	return out;
};

const sum = function(arr) {
	let out = 0;
  for(let i = 0; i < arr.length; i++) {
    out += arr[i];
  }
  return out;
};

const multiply = function(arr) {
  let out = 1;
  for(let i = 0; i < arr.length; i++) {
    out *= arr[i];
  }
  return out;
};

const power = function(l, r) {
	let out = l ** r;
  return out;
};

const factorial = function(num) {
	let out = 1;
  for(let i = num; i > 0; i--) {
    out *= i;
  }
  return out;
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
