

function k_elements_max_sum(arr, k) {
    let max_sum = 0
    let current_sum = sum(arr.slice(0, k))
    max_sum = current_sum

    for (let right = k; right < arr.length; right++) {
        let left = right - k
        current_sum += arr[right] - arr[left]
        max_sum = Math.max(max_sum, current_sum)
    }
    
    return max_sum
}

console.log(k_elements_max_sum([1, 2, 3, 4, 5], 2))  // Output: 9 (4 + 5)