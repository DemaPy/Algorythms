

function move_zeroes(arr) {
    let slowPointer = 0;
    let fastPointer = 0;

    while (fastPointer < arr.length) {
        if (arr[fastPointer] !== 0) {
            [arr[slowPointer], arr[fastPointer]] = [arr[fastPointer], arr[slowPointer]];
            slowPointer++;
        }
        fastPointer++;
    }
    return arr;
}

const result = move_zeroes([0, 1, 0, 3, 12]) // [1, 3, 12, 0, 0];
console.log(result);