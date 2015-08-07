/*

ADT List: methods and properties

	listSize 			(property)		Number of elements
	pos 					(property)		Current position in list
	length 				(property)		Returns the number of elements in list
	clear 				(function)		Clears elements from list
	getData 			(function)		Returns data representation of list
	getElement 		(function)		Returns element at current position
	insert 				(function)		Inserts new element after exisiting element
	append 				(function)		Adds new element to the end of the list
	remove 				(function)		Removes an element
	front 				(function)		Sets current position as the first in the list
	end 					(function)		Sets current position to last element in the list
	prev 					(function)		Moves current position back an element
	nextEl 				(function)		Moves current position forward an element
	currPos 			(function)		Returns the current position
	moveTo 				(function)		Moves the current position to a specified position
	find 					(function)		Finds a particular element
	contains      (funciton)		Checks if an element is in a list

*/

function append (el) {
	this.data[++this.listSize] = el;
}

function find (el) {
	for (var i = 0; i < this.data.length; i++) {
		if (this.data[i] == el) {
			return i;
		}
	}
	return -1;
};

function remove (el) {
	var foundIdx = this.find(el);
	if (foundIdx != -1) {
		this.data.splice(foundIdx, 1);
		--this.listSize;
		return true;
	}
	return false;
}

function listLength () {
	return this.listSize;
}

function getData() {
	return this.data.getData();
}

function insert(el, prev) {
	var insertPosition = this.find(prev);
	if (insertPosition != -1) {
		this.data.splice(insertPosition + 1, 0, el);
		++this.listSize;
		return true;
	}
	return false;
}

function clear () {
	delete this.data;
	this.data = [];
	this.listSize = this.pos = 0;
}

function contains (el) {
	for (var i = 0; i < this.data.length; i++) {
		if (this.data[i] == el) {
			return true;
		}
	}
	return false;
}

/*

Why implement an interator for the list? Why not use indexing?
	- No need to worry about the underlying data storage structure when accessing list elements
	- Being able to update the list without having to update the iterator. Otherwise, an index
	  could be invalid when a new item is added to the list
	- Its a uniform way of accessing elements for different types of data stores... Maybe we don't use actor names
*/


function front() {
	this.pos = 0;
}

function end() {
	this.pos = this.listSize - 1;
}

function prev() {
	if (this.pos > 0) {
		--this.pos;
	}
}

function nextEl() {
	if (this.pos < this.listSize -1) {
		++this.pos;
	}
}

function currPos() {
	return this.pos;
}

function moveTo(p) {
	this.pos = p;
}

function getElement() {
	return this.data[this.pos];
}

// List constructor function

function List() {
	this.data = [];
	this.listSize = 0;
	this.pos = 0;

	this.listLength = listLength;
	this.clear = clear;
	this.getData = getData;
	this.getElement = getElement;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.nextEl = nextEl;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.find = find;
	this.contains = contains;
}


