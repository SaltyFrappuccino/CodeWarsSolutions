# https://www.codewars.com/kata/5254ca2719453dcc0b00027d

import itertools


def permutations(s):
    a = itertools.permutations(s)
    a = set(a)
    b = set()
    for perm in a:
        word = ''
        for letter in perm:
            word += letter
        b.add(word)
    return list(b)


print(permutations('aabb'))
