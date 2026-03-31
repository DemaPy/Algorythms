function remove_leading_spaces(arr) {
  let slowPointer = 0;
  let fastPointer = 0;

  while (fastPointer < arr.length) {
    if (
      arr[fastPointer] !== " " ||
      (arr[fastPointer] === " " &&
        (slowPointer === 0 || arr[slowPointer - 1] !== " "))
    ) {
      arr[slowPointer] = arr[fastPointer];
      slowPointer++;
    }
    fastPointer++;
  }
  return arr.slice(0, slowPointer);
}

const result = remove_leading_spaces([
  " ",
  " ",
  "H",
  "i",
  " ",
  " ",
  " ",
  " ",
  "!",
  "!",
  " ",
  " ",
]); // [" ", "H", "i", " ", "!", "!", " "];
console.log(result);
