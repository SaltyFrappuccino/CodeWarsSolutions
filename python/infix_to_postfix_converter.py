# https://www.codewars.com/kata/52e864d1ffb6ac25db00017f/train/python

import re

def to_postfix(infix):
    ops, stack, out = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3}, [], []
    for token in re.findall(r'\d+|[+\-*/^()]', infix):
        if token.isdigit(): out.append(token)
        elif token == '(': stack.append(token)
        elif token == ')':
            while stack and stack[-1] != '(': out.append(stack.pop())
            stack.pop()
        else:
            while stack and ops[token] <= ops.get(stack[-1], 0) and token != '^': out.append(stack.pop())
            stack.append(token)
    return ''.join(out + stack[::-1])