var Stack = function() {

	function push(el) {
		this.data[this.top++] = el;
	}

	function pop() {
		return this.data[--this.top];
	}

	function peek() {
		return this.data[this.top - 1]
	}

	function length() {
		return this.top;
	}

	function clear() {
		this.top = 0;
	}

	return {
		data: [],
		top: 0,
		push: push,
		pop: pop,
		peek: peek,
		clear: clear,
		length: length
	};

};

var stack = new Stack();
stack.push('one');
stack.push('two');
stack.push('three');
stack.push('four');
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.length());
console.log(stack.clear());
console.log(stack.peek());


function isPalindrome(word) {
	var palindrome = new Stack();

	for (var i = 0; i < word.length; i++) {
		palindrome.push(word[i]);
	}
	var reverse = "";
	while (palindrome.length() > 0) {
		reverse += palindrome.pop();
	}

	if (word === reverse) {
		return true;
	} else {
		return false;
	}
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("notapalindrome"));