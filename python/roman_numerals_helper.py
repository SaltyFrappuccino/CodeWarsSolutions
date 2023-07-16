# https://www.codewars.com/kata/51b66044bce5799a7f000003

class RomanNumerals:
    @staticmethod
    def to_roman(val):
        roman_numerals = {
            1000: 'M',
            900: 'CM',
            500: 'D',
            400: 'CD',
            100: 'C',
            90: 'XC',
            50: 'L',
            40: 'XL',
            10: 'X',
            9: 'IX',
            5: 'V',
            4: 'IV',
            1: 'I'
        }

        roman_numeral = ''
        for num, numeral in roman_numerals.items():
            while val >= num:
                roman_numeral += numeral
                val -= num

        return roman_numeral

    @staticmethod
    def from_roman(roman_num):
        roman_numerals = {
            'M': 1000,
            'CM': 900,
            'D': 500,
            'CD': 400,
            'C': 100,
            'XC': 90,
            'L': 50,
            'XL': 40,
            'X': 10,
            'IX': 9,
            'V': 5,
            'IV': 4,
            'I': 1
        }

        num = 0
        i = 0
        while i < len(roman_num):
            if i + 1 < len(roman_num) and roman_num[i:i + 2] in roman_numerals:
                num += roman_numerals[roman_num[i:i + 2]]
                i += 2
            else:
                num += roman_numerals[roman_num[i]]
                i += 1

        return num

roman = RomanNumerals()

print(roman.to_roman(1666))
print(roman.from_roman('XCVII'))