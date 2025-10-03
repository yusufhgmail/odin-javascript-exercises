const sumAll = function (a, b) {
	// get the smallest of a and b and largest of a and b

	console.log("a: " + a);
	console.log("b: " + b);

	let start, end;

	if (a == b) {
		console.log("a = b");
		return a;
	} else if (a < b) {
		console.log("a < b");
		start = a;
		end = b;
	} else {
		console.log("a > b");
		start = b;
		end = a;
	}

	console.log("start: " + start);
	console.log("end: " + end);

	let sum = 0;

	for (start; start <= end; start++) {
		sum += start;
	}
	return sum;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
