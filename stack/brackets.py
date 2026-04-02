
pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
}

def is_balanced(s: str) -> bool:
    stack = []
    for char in s:
        if char in pairs:
            stack.append(char)
        elif len(stack) == 0:
            return False
        else:
            bracket = stack.pop()
            if char != pairs[bracket]:
                return False

    return len(stack) == 0
        
result = is_balanced("()") # True
result = is_balanced(")") # False
result2 = is_balanced("(())") # True
result3 = is_balanced("(()") # False
result4 = is_balanced("({[]})") # True
result5 = is_balanced("({[})") # False

print(result)
print(result2)
print(result3)
print(result4)
print(result5)