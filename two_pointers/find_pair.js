const arr = [1, 2, 3, 4, 5];
const target = 18;

function find_pair(arr, target) {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    while (leftPointer < rightPointer) {
        const current_sum = arr[leftPointer] + arr[rightPointer];

        if (current_sum === target) {
            return [arr[leftPointer], arr[rightPointer]]
        }
        if (current_sum < target) {
            leftPointer++
        } else {
            rightPointer--
        }
    }
    return null;
}

const result = find_pair([1, 2, 3, 4, 5], 20) // null
const result2 = find_pair([1, 2, 3, 4, 5], 9) // [4, 5]

console.log(result);
console.log(result2);
