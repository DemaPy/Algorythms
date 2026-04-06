function intersection(arr1, arr2) {
  const intersectionArray = [];
  let firstPointer = 0;
  let secondPointer = 0;

  while (firstPointer < arr1.length && secondPointer < arr2.length) {
    if (arr1[firstPointer] < arr2[secondPointer]) {
      firstPointer++;
    } else if (arr1[firstPointer] > arr2[secondPointer]) {
      secondPointer++;
    } else {
      intersectionArray.push(arr1[firstPointer]);
      firstPointer++;
      secondPointer++;
    }
  }

  return intersectionArray;
}

const result = intersection([2, 3, 6], [1, 3, 3, 5, 6]) // [3, 6]
console.log(result)