var BFS = function(graph, source) {

  // establish a queue data structure to manage BFS implementation

  var Queue = function() {
		this.items = [];
	};

	Queue.prototype.enqueue = function(obj) {
		this.items.push(obj);
	};

	Queue.prototype.dequeue = function() {
		return this.items.shift();
	};

	Queue.prototype.isEmpty = function() {
		return this.items.length === 0;
	};

	var info = [];

	for (var i = 0; i < graph.length; i++) {
		info[i] = {
			distance: null,
			predecessor: null
		};
	}

	info[source].distance = 0;

	var queue = new Queue();
	queue.enqueue(source);
  counter = 0;

	while (queue.isEmpty() === false) {
    counter++;
    var temp = queue.dequeue();
    for (var j = 0; j < graph[temp].length; j++) {
      var current = graph[temp][j];
      if (info[current].distance === null) {
        info[current].predecessor = temp;
        info[current].distance = 1 + info[temp].distance;
        queue.enqueue(current);
      }
    }
  }
	return info;

};

// [1]
var adjList = [
	[1],         // 0
	[0, 4, 5],   // 1
	[3, 4, 5],   // 2
	[2, 6],      // 3
	[1, 2],      // 4
	[1, 2, 6],   // 5
	[3, 5],      // 6
	[]           // 7
];

var info = BFS(adjList, 3);

for (var i = 0; i < adjList.length; i++) {
	console.log("vertex " + i + ": distance = " + info[i].distance + ", predecessor = " + info[i].predecessor);
}