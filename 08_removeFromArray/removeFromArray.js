const removeFromArray = function (array, ...toRemove) {
	for (let arg of toRemove) {
		array = array.filter((arrayLookup) => arrayLookup != arg);
	}
	return array;
};

let array = [1, 2, 3, 4, 5];

console.log(removeFromArray(array, 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
