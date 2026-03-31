

def move_zeroes(nums):
    fast_pointer = 0
    slow_pointer = 0

    while fast_pointer < len(nums):
        if nums[fast_pointer] != 0:
            nums[slow_pointer], nums[fast_pointer] = nums[fast_pointer], nums[slow_pointer]
            slow_pointer += 1
        fast_pointer += 1

    return nums

result = move_zeroes([0, 1, 0, 3, 12]) # [1, 3, 12, 0, 0]
print(result);