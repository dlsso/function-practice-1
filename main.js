// Problem 1
var tripleFive = function() {
	for (i = 0; i <=2; i++){
		console.log("Five!");
	}
}

console.log("1.")
tripleFive()


// Problem 2
var lastLetter = function(string) {
	return string.charAt(string.length -1);
}

console.log("2. Run lastLetter('some string') to test")


// Problem 3
var square = function(x) {
	return x*x;
}

console.log("3. Run square(x) to test")


// Problem 4
var negate = function(x) {
	return -x;
}

console.log("4. Run negate(x) to test")


// Problem 5
var toArray = function(x, y, z) {
	return [x, y, z];
}

console.log("5. Run toArray(a, b, c) to test")


// Problem 6
var startsWithA = function(string) {
	return string.charAt(0).toLowerCase() == "a";
}

console.log("6. Run startsWithA('some string') to test")

// Problem 7
var excite = function(string) {
	return string + "!!!";
}

console.log("7. Run excite('some string') to test")


// Problem 8
var sun = function(string) {
	return string.indexOf("sun") !== -1;
}

console.log("8. Run sun('some string') to test")


// Problem 9
var tiny = function(x) {
	return x > 0 && x < 1;
}

console.log("9. Run tiny(x) to test")


// Problem 10
var getSeconds = function(string) {
	var values = string.split(":");
	var total = parseInt(values.shift())*60;
	var total = total + parseInt(values.shift());
	console.log(total);
}

console.log("10. Run getSeconds('MM:SS') to test")