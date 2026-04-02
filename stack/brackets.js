
const pairs = {
    "{": "}",
    "(": ")",
    "[": "]"
}

function is_balanced(s) {
    const stack = [];

    for (let char of s) {
        if (char in pairs) {
            stack.push(char)
        } else if (stack.length === 0) {
            return false;
        } else {
            const charFromStack = stack.pop();
            if (pairs[charFromStack] !== char) {
                return false
            }
        }
    }
    return stack.length === 0;
}

const result = is_balanced("()") // True
const result1 = is_balanced(")") // False
const result2 = is_balanced("(())") // True
const result3 = is_balanced("(()") // False
const result4 = is_balanced("({[]})") // True
const result5 = is_balanced("({[})") // False

console.log(
    result,
    result1,
    result2,
    result3,
    result4,
    result5
)