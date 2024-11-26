// https://www.codewars.com/kata/5672682212c8ecf83e000050/train/typescript

export function dblLinear(n: number): number {
    const u: number[] = [1];
    let i = 0, j = 0;

    while (u.length <= n) {
      const nextY = 2 * u[i] + 1;
      const nextZ = 3 * u[j] + 1;

      if (nextY < nextZ) {
        u.push(nextY);
        i++;
      } else if (nextZ < nextY) {
        u.push(nextZ);
        j++;
      } else {
        u.push(nextY);
        i++;
        j++;
      }
    }
    return u[n];
  }
