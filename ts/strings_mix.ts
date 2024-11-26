// https://www.codewars.com/kata/5629db57620258aa9d000014/train/typescript

export const mix = (s1: string, s2: string): string => {
    const countLetters = (str: string): Record<string, number> => {
      return [...str].reduce((acc, char) => {
        if (/[a-z]/.test(char)) {
          acc[char] = (acc[char] || 0) + 1;
        }
        return acc;
      }, {} as Record<string, number>);
    };

    const count1 = countLetters(s1);
    const count2 = countLetters(s2);
    const result: string[] = [];
    const allLetters = new Set([...Object.keys(count1), ...Object.keys(count2)]);

    allLetters.forEach((letter) => {
      const countInS1 = count1[letter] || 0;
      const countInS2 = count2[letter] || 0;
      const maxCount = Math.max(countInS1, countInS2);

      if (maxCount > 1) {
        if (countInS1 > countInS2) {
          result.push(`1:${letter.repeat(maxCount)}`);
        } else if (countInS2 > countInS1) {
          result.push(`2:${letter.repeat(maxCount)}`);
        } else {
          result.push(`=:${letter.repeat(maxCount)}`);
        }
      }
    });

    return result
      .sort((a, b) => {
        const lengthDiff = b.length - a.length;
        if (lengthDiff !== 0) return lengthDiff;
        return a < b ? -1 : a > b ? 1 : 0;
      })
      .join('/');
  };