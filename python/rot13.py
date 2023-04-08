# https://www.codewars.com/kata/530e15517bc88ac656000716

def rot13(string):
    result = ''
    for char in string:
        if char.isalpha():
            if char.isupper():
                result += chr((ord(char) - 65 + 13) % 26 + 65)
            else:
                result += chr((ord(char) - 97 + 13) % 26 + 97)
        else:
            result += char
    return result
