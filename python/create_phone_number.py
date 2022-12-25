# https://www.codewars.com/kata/525f50e3b73515a6db000b83

def create_phone_number(n):
    number = '('
    for i in range(3):
        number += str(n[i])
    for i in range(3):
        n.pop(0)
    number += ") "
    for i in range(3):
        number += str(n[i])
    for i in range(3):
        n.pop(0)
    number += '-'
    for i in range(4):
        number += str(n[i])
    for i in range(4):
        n.pop(0)
    return number

print(create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
