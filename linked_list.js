var List = function() {

	var Node = function(data, next) {
		return {
			data: (typeof data !== "undefined" ? data : null),
			next: (typeof next !== "undefined" ? next : null)
		};
	};

	return {

		start: null,

		end: null,

		addNode: function(data) {
			if (this.start === null) {
				this.start = new Node(data);
				this.end = this.start;
			} else {
				this.end.next = new Node(data);
				this.end = this.end.next;
			}
		},

		traverse: function(callback) {
			var current = this.start;
			while (current.next !== null) {
				callback(current);
				current = current.next;
			}
		},

		addNodeAsFirst: function(data) {
			var temp = new Node(data);
			temp.next = this.start;
			this.start = temp;
		},

		destroyNode: function(data) {
			var current = this.start;
			var previous = this.start;
			while (current !== null) {
				if (data === this.start.data) {
					this.start = current.next;
					return;
				} else if (data === this.end.data) {
					this.end = previous;
					this.end.next = null;
				} else if (data === current.data) {
					previous.next = current.next;
				}
				previous = current;
				current = current.next;
			}
		},

		addNodeAfter: function(prev, data) {
			var current = this.start;
			while (current !== null) {
				if (current.data === prev) {
					var temp = new Node(data);
					temp.next = current.next;
					if (current == this.end) {
						this.end = temp;
					}
					current.next = temp;
					return;
				}
				current = current.next;
			}
		},

		nodeAtIndex: function(i) {
			var current = this.start;
			while (current.data !== null) {
				i--;
				if (i === 0) {
					return current;
				}
				current = current.next;
			}
			return null;
		},

    printList: function (params) {
      console.log(params);
      this.traverse(function (node) {
        console.log("NODE IN LINKED LIST: ", node);
      });
    }
	};

};

var l = new List();
l.addNode('one');
l.addNode('two');
l.addNode('three');
l.addNode('four');
l.addNode('five');
l.addNode('six');
l.addNode('seven');
console.log("\n\nSTART: ", l.start, " END: ", l.end);
l.printList('initialized list...\n\n');

l.destroyNode("three");
console.log("\n\nSTART: ", l.start, " END: ", l.end);
l.printList('deleted node three...\n\n');

l.addNode("eight");
console.log("\n\nSTART: ", l.start, " END: ", l.end);
l.printList('added node eight...\n\n');

l.addNodeAfter("four", "four-and-a-half");
console.log("\n\nSTART: ", l.start, " END: ", l.end);
l.printList('added node four-and-a-half after node four\n\n');

l.addNodeAsFirst('zero');
console.log("\n\nSTART: ", l.start, " END: ", l.end);
l.printList('added node zero at first position\n\n');


