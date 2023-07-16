// https://www.codewars.com/kata/51b66044bce5799a7f000003

class RomanNumerals {
    static toRoman(num) {
      const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
      ];
  
      let romanNumeral = '';
      for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
          romanNumeral += romanNumerals[i].numeral;
          num -= romanNumerals[i].value;
        }
      }
  
      return romanNumeral;
    }
  
    static fromRoman(str) {
      const romanNumerals = [
        { numeral: 'M', value: 1000 },
        { numeral: 'CM', value: 900 },
        { numeral: 'D', value: 500 },
        { numeral: 'CD', value: 400 },
        { numeral: 'C', value: 100 },
        { numeral: 'XC', value: 90 },
        { numeral: 'L', value: 50 },
        { numeral: 'XL', value: 40 },
        { numeral: 'X', value: 10 },
        { numeral: 'IX', value: 9 },
        { numeral: 'V', value: 5 },
        { numeral: 'IV', value: 4 },
        { numeral: 'I', value: 1 }
      ];
  
      let num = 0;
      let i = 0;
      while (i < str.length) {
        for (let j = 0; j < romanNumerals.length; j++) {
          if (str.startsWith(romanNumerals[j].numeral, i)) {
            num += romanNumerals[j].value;
            i += romanNumerals[j].numeral.length;
            break;
          }
        }
      }
  
      return num;
    }
  }
  
  console.log(RomanNumerals.fromRoman("XVI"));
  console.log(RomanNumerals.toRoman(1666));