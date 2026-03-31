def remove_leading_spaces(arr):
    slow = 0
    fast = 0

    while fast < len(arr):
        if arr[fast] != ' ' or (arr[fast] == ' ' and (slow == 0 or arr[slow - 1] != ' ')):
            arr[slow] = arr[fast]
            slow += 1
        fast += 1

    return arr[:slow]

result = remove_leading_spaces([
  " ",
  " ",
  "H",
  "i",
  " ",
  " ",
  " ",
  " ",
  "!",
  "!",
  " ",
  " ",
]); # [" ", "H", "i", " ", "!", "!", " "];
print(result)