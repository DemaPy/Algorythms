


def merge(arr1, arr2):
    first_pointer = 0;
    second_pointer = 0;
    merged_array = [];

    while first_pointer < len(arr1) and second_pointer < len(arr2):
        if arr1[first_pointer] < arr2[second_pointer]:
            merged_array.append(arr1[first_pointer])
            first_pointer += 1
        elif arr1[first_pointer] > arr2[second_pointer]:
            merged_array.append(arr2[second_pointer])
            second_pointer += 1
        else:
            merged_array.append(arr1[first_pointer])
            merged_array.append(arr2[second_pointer])
            first_pointer += 1
            second_pointer += 1

    merged_array.extend(arr1[first_pointer:])
    merged_array.extend(arr2[second_pointer:])

    return merged_array




result = merge([2, 4, 6], [1, 3, 5]) # [1, 2, 3, 4, 5, 6]
print(result)