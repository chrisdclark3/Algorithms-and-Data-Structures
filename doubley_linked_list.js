var DLL = function() {

	var Node = function(data, previous, next) {
		return {
			data: (typeof data !== "undefined" ? data : null),
      previous: (typeof previous !== "undefined" ? previous : null),
			next: (typeof next !== "undefined" ? next : null)
		};
	};

	return {

		start: null,

		end: null,

    traverse: function (callback) {
      var current = this.start;
      while (current !== null) {
        callback(current);
        current = current.next;
      }
    },

    addNode: function (data) {
      if (this.start === null) {
        this.start = new Node (data);
        this.end = this.start;
      } else {
        var temp = new Node (data, this.end);
        this.end.next = temp;
        this.end = this.end.next;
      }
    },

    insertNode: function (prev, data) {
      var current = this.start;
      while (current !== null) {
        if (current.data == prev) {
          var temp = new Node (data, current, current.next);
          if (current.data == this.end.data) {
            this.end.next = temp;
            this.end = this.end.next;
            return temp;
          } else {
            current.next.previous = temp;
            current.next = temp;
            return temp;
          }
        }
        current = current.next;
      }
      return null;
    },

    removeNode: function (data) {
      var current = this.start;
      while (current !== null) {
        if (data == this.end.data) {
            this.end = this.end.previous;
            this.end.next = null;
            return this.end;
        }
        if (data == this.start.data) {
          this.start = this.start.next;
          this.start.previous = null;
          return this.start;
        }
        if (current.data == data) {
          var prev = current.previous,
              next = current.next;
          next.previous = prev;
          prev.next = next;
          return current;
        }
        current = current.next;
      }
    }

  };

};

l = new DLL ();

l.addNode('one');
l.addNode('two');
l.addNode('three');
l.addNode('five');
l.insertNode('three', 'four');
l.insertNode('five', 'six');
l.removeNode('four');
l.removeNode('one');
l.removeNode('six');

l.traverse(function (node) {
  console.log("node.data: ", node.data, "node.previous", node.previous, "node.next", node.next, "\n");
});