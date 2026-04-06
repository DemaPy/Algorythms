

def k_elements_max_sum(arr, k):
    max_sum = 0
    current_sum = sum(arr[:k])
    max_sum = current_sum

    for right in range(k, len(arr)):
        left = right - k
        current_sum += arr[right] - arr[left]
        max_sum = max(max_sum, current_sum)

    return max_sum

print(k_elements_max_sum([1, 2, 3, 4, 5], 2))  # Output: 9 (4 + 5)