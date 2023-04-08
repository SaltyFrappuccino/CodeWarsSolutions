# https://www.codewars.com/kata/5277c8a221e209d3f6000b56

def valid_braces(braces):
    stack = []
    for brace in braces:
        if brace in ["(", "[", "{"]:
            stack.append(brace)
        else:
            if not stack:
                return False
            if brace == ")" and stack[-1] == "(":
                stack.pop()
            elif brace == "]" and stack[-1] == "[":
                stack.pop()
            elif brace == "}" and stack[-1] == "{":
                stack.pop()
            else:
                return False
    return len(stack) == 0
