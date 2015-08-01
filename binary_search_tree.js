var BST = function() {

	var Node = function(key, value, leftChild, parent, rightChild) {
		return {
			key: (typeof key === 'undefined') ? null : key,
			value: (typeof value === 'undefined') ? null : value,
			leftChild: (typeof leftChild === 'undefined') ? null : leftChild,
			parent: (typeof parent === 'undefined') ? null : parent,
			rightChild: (typeof rightChild === 'undefined') ? null : rightChild
		};
	};

	var forEachNode = function (node, callback) {
		  if (node !== null) {
        callback(node);
        forEachNode(node.leftChild, callback);
        forEachNode(node.rightChild, callback);
      }
	};

	var defaultCallback = function (node) {
    console.log("KEY = " + node.key + ": VALUE = " + node.value);
  };

	return {

		root: new Node(),

		binarySearch: function (key, node) {

      if (typeof node === 'undefined') {
        return this.binarySearch(key, this.root);
      }

      if (node.key === null) {
          return null;
      }

      if (key < node.key) {
          return this.binarySearch(key, node.leftChild);
      } else if (key > node.key) {
          return this.binarySearch(key, node.rightChild);
      } else {
          return node.value;
      }
		},

		addNode: function(key, value) {

			if (isNaN(key)) {
				return undefined;
			};

			if (this.root.key === null) {
				this.root.key = key;
				this.root.value = value;
				return this.root;
			}

			var current = this.root,
				newNode;

			while (true) {
				if (key < current.key) {
					if (current.leftChild === null) {
						current.leftChild = new Node(key, value, null, current, null);
						newNode = current.leftChild;
						break;
					} else {
						current = current.leftChild;
					}
				} else if (key > current.key) {
					if (current.rightChild === null) {
						current.rightChild = new Node(key, value, null, current, null);
						newNode = current.rightChild;
						break;
					} else {
						current = current.rightChild;
					}
				} else {
					console.log("Error: keys in a Binary Search Tree must be unique; there is already a node (", current, ") with a key of ", key);
					break;
				}
			}
			return newNode;
		},

		destoryNode: function(key) {
			if (isNaN(key)) {
				return undefined;
			};
			var found = false,
				current = this.root,
				parent,
				childCount,
				replacement,
				replacementParent;

			while (!found && current) {
				if (key < current.key) {
					parent = current;
					current = current.leftChild;
				} else if (key > current.key) {
					parent = current;
					current = current.rightChild;
				} else {
					found = true;
				}
			}
			if (found) {
				childCount = (current.leftChild !== null ? 1 : 0) + (current.rightChild !== null ? 1 : 0);
				if (current.key === this.root.key) {
					switch (childCount) {
						case 0:
							this.root = null;
							break;
						case 1:
							this.root = (current.rightChild === null ? current.leftChild : current.rightChild);
							break;
						case 2:
							replacement = this.root.leftChild;
							while (replacement.rightChild !== null) {
								replacementParent = replacement;
								replacement = replacement.rightChild;
							}

							if (replacementParent !== null) {
								replacementParent.rightChild = replacement.leftChild;
								replacement.rightChild = this.root.rightChild;
								replacement.leftChild = this.root.leftChild;
							} else {
								replacement.rightChild = this.root.rightChild;
							}
							this.root = replacement;
					}
				} else {
					switch (childCount) {
						case 0:
							if (current.key < parent.key) {
								parent.leftChild = null;
							} else {
								parent.rightChild = null;
							}
							break;
						case 1:
							if (current.key < parent.key) {
								parent.leftChild = (current.leftChild === null ? current.rightChild : current.leftChild);
							} else {
								parent.rightChild = (current.leftChild === null ? current.rightChild : current.leftChild);
							}
							break;
						case 2:
							replacement = current.leftChild;
							replacementParent = current;

							while (replacement.rightChild !== null) {
								replacementParent = replacement;
								replacement = replacement.rightChild;
							}

							replacementParent.rightChild = replacement.leftChild;
							replacement.rightChild = current.rightChild;
							replacement.leftChild = current.leftChild;

							if (current.key < parent.key) {
								parent.leftChild = replacement;
							} else {
								parent.rightChild = replacement;
							}
					}
				}
			}
		},

		eachNode: function(callback) {
	  	if (typeof callback === "undefined") {
          callback = defaultCallback;
      }
      return forEachNode(this.root, callback);
		},


		minNode: function() {
			var node = this.root;
			while (node.leftChild !== null) {
				node = node.leftChild;
			}
			return node.key;
		},

		maxNode: function() {
			var node = this.root;
			while (node.rightChild !== null) {
				node = node.rightChild;
			}
			return node.key;
		}
	};

};

var NYJStartingDefense = new BST();

// Interesting number choice from the number 6 overall pick...
NYJStartingDefense.addNode(62, "Leonard Williams");
NYJStartingDefense.addNode(96, "Muhammad Wilkerson");
NYJStartingDefense.addNode(94, "Damon Harrision");
NYJStartingDefense.addNode(98, "Quinton Coples");
NYJStartingDefense.addNode(56, "Demario Davis");
NYJStartingDefense.addNode(52, "David Harris");
NYJStartingDefense.addNode(97, "Calvin Harris");
NYJStartingDefense.addNode(24, "Darrelle Revis");
NYJStartingDefense.addNode(25, "Calvin Pryor");
NYJStartingDefense.addNode(21, "Marcus Gilchrist");
NYJStartingDefense.addNode(31, "Antonio Cromartie");

// Tree output diagram:
//                   [62]
//             [56]       [96]
//         [52]       [94]    [98]
//     [24]               [97]
// [21]    [25]
//             [31]

console.log(NYJStartingDefense.eachNode(function (node) {
	console.log('Key: ', node.key, ' Parent: ', node.parent);
}));
console.log("Searching for 52...", NYJStartingDefense.binarySearch(52));
console.log("min key: ", NYJStartingDefense.minNode());
console.log("max key: ", NYJStartingDefense.maxNode());