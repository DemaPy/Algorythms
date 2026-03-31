arr = [1,2,3,4,5]
target = 18

def find_pair(arr, target):
    left = 0
    right = len(arr) - 1

    while left < right:
        current_sum = arr[left] + arr[right];

        if current_sum == target:
            return [arr[left], arr[right]]
        if current_sum < target:
            left += 1
        else:
            right -= 1
    return None

result = find_pair([1, 2, 3, 4, 5], 20) # null
result2 = find_pair([1, 2, 3, 4, 5], 9) # [4, 5]

print(result)
print(result2)