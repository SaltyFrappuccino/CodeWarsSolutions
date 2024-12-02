// https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/typescript

export function rot13(str: string): string {
    return str.replace(/[A-Za-z]/g, (char) => {
      const base = char <= 'Z' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
      return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
    });
  }
