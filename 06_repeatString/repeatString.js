const repeatString = function (string, number) {
	let newString = "";
	for (let i = 1; i <= number; i++) {
		newString = newString + string;
	}
	return newString;
};

// Do not edit below this line
module.exports = repeatString;
