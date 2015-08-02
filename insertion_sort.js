// Insertion sort example in javascript
// Given a sequence of n numbers, reorder them in decreasing order

function insertionSort (arr) {
  var current;

  for (var i = 0; i < arr.length; i++) {
    current = arr[i];
    for (var j = i - 1; j > -1 && arr[j] > current; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = current;
  }
  return arr;
}

console.log(insertionSort([2, 5, 6, 1, 3, 9]));

// Step by step breakdown:

// first: our inner loop doesn't run as j = -1. arr[i] = 2

// second: arr[j] would = 2 while arr[i] is 5; 2 < 5 so the inner loop doesn't run (i.e. the array is in order)

// third: arr[j] would = 5 while arr[i] is 6; 5 < 6 so the inner loop doesn't run (i.e. the array is in order)

// fourth: arr[j] = 6 and arr[i] or current is 1; 6 > 1 so we start our inner loop
    // first: arr[j+1] or arr[i] is set equal to arr[j] or 6
           // arr = [2, 5, 6, 6, 3, 9]
    // second: arr[j] now = 5 which is still greater then current so arr[j+1] is set to 5
          // arr = [2, 5, 5, 6, 3, 9]
    // third: arr[j] now = 2 which is still greater then current so arr[j+1] is set to 2
          // arr = [2, 2, 5, 6, 3, 9]
    // at this point, j = -1 and are loop terminates. As j has incremented downwards we've effectively shifted the array over,
    // looking for a value that is less then current. Since we didn't find one, we're left with a shifted array that has a duplicate
    // at position 0. This becomes are new lowest value, current, or 1.
    // arr = [1, 2, 5, 6, 3, 9]

// fifth: arr[j] = 6 and arr[i] or current is 3; 5 > 3 so we start our inner loop;
    // first: arr[j+1] or arr[i] is set equal to arr[j] or 6
           // arr = [1,2,5,6,6,9]
    // second: arr[j] = 5 which is still greater then current so arr[j+1] is set equal to arr[j] or 5
           // arr = [1,2,5,5,6,9]
    // third: at this point our loop breaks because arr[j] = 2 which is less then current or 3. We now set arr [j+1],
    // a duplicate 5, equal to 3 and now
          // arr = [1, 2, 3, 5, 6, 9];

// sixth: arr[j] would = 6 while arr[i] is 9; this is our last check and our loop terminates.

