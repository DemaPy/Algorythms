
def concatenate(arr1, arr2):
    first_pointer = 0
    second_pointer = 0
    result = []

    while first_pointer < len(arr1) and second_pointer < len(arr2):
        if arr1[first_pointer] <= arr2[second_pointer]:
            result.append(arr1[first_pointer])
            first_pointer += 1
            continue

        if arr1[first_pointer] > arr2[second_pointer]:
            result.append(arr2[second_pointer])
            second_pointer += 1
            continue

    result.extend(arr1[first_pointer:])
    result.extend(arr2[second_pointer:])
    
    return result


result = concatenate([1, 3, 5, 7], [2, 4, 6, 8]) # [1, 2, 3, 4, 5, 6, 7, 8]
result2 = concatenate([1, 3, 3, 7], [2, 3, 3, 8]) # [1, 2, 3, 3, 3, 3, 7, 8]

print(result)
print(result2)