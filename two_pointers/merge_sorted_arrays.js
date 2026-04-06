function merge(arr1, arr2) {
  const mergedArray = [];
  let firstPointer = 0;
  let secondPointer = 0;

  while (firstPointer < arr1.length && secondPointer < arr2.length) {
    if (arr1[firstPointer] < arr2[secondPointer]) {
      mergedArray.push(arr1[firstPointer]);
      firstPointer++;
    } else if (arr1[firstPointer] > arr2[secondPointer]) {
      mergedArray.push(arr2[secondPointer]);
      secondPointer++;
    } else {
      mergedArray.push(arr1[firstPointer]);
      mergedArray.push(arr2[secondPointer]);
      firstPointer++;
      secondPointer++;
    }
  }

  return mergedArray.concat(
    arr1.slice(firstPointer),
    arr2.slice(secondPointer),
  );
}

const result = merge([2, 4, 6], [1, 3, 5]) // [1, 2, 3, 4, 5, 6]
const result2 = merge([2], [1, 5, 7]) // [1, 2, 5, 7]
console.log(result)
console.log(result2)