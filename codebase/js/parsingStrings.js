var infixString = "3 * 7 + 2 + 9 / 6";

var infixNoSpace = [];

for (var i = 0; i < infixString.length; i++) {
	if (infixString[i] != " ") {
		infixNoSpace[infixNoSpace.length] = infixString[i];
	}
}

console.log("infixString = " + infixString);
console.log("infixNoSpace = " + infixNoSpace);
console.log(infixNoSpace.length);