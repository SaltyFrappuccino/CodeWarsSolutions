# https://www.codewars.com/kata/5263c6999e0f40dee200059d

def get_pins(observed):
    adjacent_digits = {
        '0': ['0', '8'],
        '1': ['1', '2', '4'],
        '2': ['1', '2', '3', '5'],
        '3': ['2', '3', '6'],
        '4': ['1', '4', '5', '7'],
        '5': ['2', '4', '5', '6', '8'],
        '6': ['3', '5', '6', '9'],
        '7': ['4', '7', '8'],
        '8': ['0', '5', '7', '8', '9'],
        '9': ['6', '8', '9']
    }

    if len(observed) == 1:
        return adjacent_digits[observed]

    first_digit = observed[0]
    remaining_digits = observed[1:]
    variations = []

    for digit in adjacent_digits[first_digit]:
        sub_variations = get_pins(remaining_digits)
        for sub_variation in sub_variations:
            variations.append(digit + sub_variation)

    return variations

print(get_pins('8'))