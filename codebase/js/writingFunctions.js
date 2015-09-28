var addNumbers = function(a, b) {
	return a + b;
}

var greaterOf = function(a, b) {
	return Math.max(a, b);
}

var fibIteration = function(n) {
	fibArr = [0, 1];
	var i = 3;
	while(i <= n) {
		fibArr[i - 1] = fibArr[i - 2] + fibArr[i - 3];
		i = i + 1;
	}
	//return fibArr[n - 1];
	return fibArr;
}
var fibArr = [];

var fibRecursion = function(n) {
	if (n == 2) {
		return [0, 1];
	}
	else if (n == 1) {
		return [0];
	}
	else {
		var x = fibRecursion(n-1);
			x[x.length] = x[x.length - 1] + x[x.length - 2];
			return x;
		
	}
}

var sigmaNiteration = function(n) {
	var result = 0;
	var i = 1;
	while (i <= n) {
		result = result + i;
		i = i + 1;
	}
	return result;
}

var sigmaNformula = function(n) {
	return n * (n + 1)/2;
}

var sigmaNrecursive = function(n) {
	if (n > 1) {
		return n + sigmaNrecursive(n - 1);
	}
	else {
	return 1;
	}
}

console.log(fibRecursion(10));
console.log(fibIteration(1));
console.log(fibIteration(2));
console.log(fibIteration(3));
console.log(fibIteration(4));
console.log(fibIteration(5));
console.log(fibIteration(6));
console.log(fibIteration(7));
console.log(fibIteration(8));
console.log(fibIteration(9));
console.log(fibIteration(10));

/*
console.log(addNumbers(45, 67));
console.log(greaterOf(45, 67));

console.log(sigmaNformula(10));
console.log(sigmaNiteration(10));
*/

console.log(sigmaNrecursive(10));