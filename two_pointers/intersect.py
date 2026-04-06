


def intersection(arr1, arr2):
    first_pointer = 0;
    second_pointer = 0;
    intersection_array = [];

    while first_pointer < len(arr1) and second_pointer < len(arr2):
        if arr1[first_pointer] < arr2[second_pointer]:
            first_pointer += 1
        elif arr1[first_pointer] > arr2[second_pointer]:
            second_pointer += 1
        else:
            intersection_array.append(arr1[first_pointer])
            first_pointer += 1
            second_pointer += 1

    return intersection_array




result = intersection([2, 3, 6], [1, 3, 3, 5, 6]) # [3, 6]
print(result)