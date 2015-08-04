function merge (left, right) {
  console.log("\nLEFT: ", left, " RIGHT: ", right);
  var merged = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      merged.push(left[0]);
      left.shift();
    } else {
      merged.push(right[0]);
      right.shift();
    }
  }
  merged = merged.concat(left).concat(right);
  return merged;
}

function mergeSort (arr) {
  if (arr.length == 1) {
    return arr;
  }
  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function randomArr(num, rangeMax) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(Math.floor(Math.random() * rangeMax));
  }
  return arr;
}

var arr = randomArr(10, 100);
mergeSort(arr);