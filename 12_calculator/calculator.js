const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (arraySum) {
	let sum = 0;
	for (let i = 0; i < arraySum.length; i++) {
		sum += arraySum[i];
	}
	return sum;
};

const multiply = function (array) {
	let sum = 1;
	for (let i = 0; i < array.length; i++) {
		sum *= array[i];
	}
	return sum;
};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
