

function concatenate(arr1, arr2) {
    const result = [];
    let first_pointer = 0;
    let second_pointer = 0;

    while (first_pointer < arr1.length && second_pointer < arr2.length) {
        if (arr1[first_pointer] <= arr2[second_pointer]) {
            result.push(arr1[first_pointer])
            first_pointer++
        } else {
            result.push(arr2[second_pointer])
            second_pointer++
        }
    }

    result.push(...arr1.slice(first_pointer))
    result.push(...arr2.slice(second_pointer))

    return result
}


const result = concatenate([1, 3, 5, 7], [2, 4, 6, 8]) // [1, 2, 3, 4, 5, 6, 7, 8]
const result2 = concatenate([1, 3, 3, 7], [2, 3, 3, 8]) // [1, 2, 3, 3, 3, 3, 7, 8]

console.log(result);
console.log(result2);