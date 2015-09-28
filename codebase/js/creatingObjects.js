// Making a JS Object

var StackObj = {
	content: [],
	
	push: function(value) {
		StackObj.content.[StackObj.content.length] = value;
	},
	
	pop: function() {
		var top = StackObj.getTop();
		if (top) {
			StackObj.content.splice(0, StackObj.content.length - 1);
		}
		return p;
	},
	
	getTop: function() {
		if (StackObj.content.length == 0) {
			return null;
		}
		return StackObj.content[StackObj.content.length - 1]
	},
	
	initialize: function(initStack) {
		if (initStack == null){
			StackObj.content = [];
		}
		else {
			StackObj.content = initStack;
		}
	}
}

StackObj.initialize([45, 5, 23, 17])
StackObj.pop();
console.log("Array is " + StackObj.content)