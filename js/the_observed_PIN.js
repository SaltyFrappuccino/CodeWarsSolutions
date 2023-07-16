// https://www.codewars.com/kata/5263c6999e0f40dee200059d

function getPINs(observed) {
    const adjacentDigits = {
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
    };
  
    if (observed.length === 1) {
      return adjacentDigits[observed];
    }
  
    const firstDigit = observed[0];
    const remainingDigits = observed.slice(1);
    const variations = [];
  
    for (const digit of adjacentDigits[firstDigit]) {
      const subVariations = getPINs(remainingDigits);
      for (const subVariation of subVariations) {
        variations.push(digit + subVariation);
      }
    }
  
    return variations;
  }

  console.log(getPINs('8'));