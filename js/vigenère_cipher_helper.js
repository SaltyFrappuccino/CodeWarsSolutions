// https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3

function VigenèreCipher(key, abc) {
    this.encode = function (str) {
      let encoded = "";
      const keyLength = key.length;
      const abcLength = abc.length;
  
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const charIndex = abc.indexOf(char.toLowerCase());
  
        if (charIndex !== -1) {
          const keyChar = key[i % keyLength];
          const keyIndex = abc.indexOf(keyChar.toLowerCase());
          const shiftedIndex = (charIndex + keyIndex) % abcLength;
          const encodedChar = abc[shiftedIndex];
  
          encoded += (char === char.toUpperCase()) ? encodedChar.toUpperCase() : encodedChar;
        } else {
          encoded += char;
        }
      }
  
      return encoded;
    };
  
    this.decode = function (str) {
      let decoded = "";
      const keyLength = key.length;
      const abcLength = abc.length;
  
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const charIndex = abc.indexOf(char.toLowerCase());
  
        if (charIndex !== -1) {
          const keyChar = key[i % keyLength];
          const keyIndex = abc.indexOf(keyChar.toLowerCase());
          const shiftedIndex = (charIndex - keyIndex + abcLength) % abcLength;
          const decodedChar = abc[shiftedIndex];
  
          decoded += (char === char.toUpperCase()) ? decodedChar.toUpperCase() : decodedChar;
        } else {
          decoded += char;
        }
      }
  
      return decoded;
    };
  }

  
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const key = "password";

const c = new VigenèreCipher(key, alphabet);

console.log(c.encode("codewars"));
console.log(c.encode("CODEWARS")); 
