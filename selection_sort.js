function selectionSort (arr) {
  for (var i = 0; i < arr.length; i++) {
    var index = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }
  return arr;
}

console.log(selectionSort([11,2,15,7,8,6,3,9]));