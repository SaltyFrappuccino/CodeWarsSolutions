// https://www.codewars.com/kata/59ccf051dcc4050f7800008f/train/typescript

export function buddy(start: number, limit: number): number[] {
    function sumOfProperDivisors(n: number): number {
        let sum = 1;
        const sqrt = Math.sqrt(n);
        for (let i = 2; i <= sqrt; i++) {
            if (n % i === 0) {
                sum += i;
                if (i !== n / i) sum += n / i;
            }
        }
        return sum;
    }

    for (let n = start; n <= limit; n++) {
        const m = sumOfProperDivisors(n) - 1;
        if (m > n && sumOfProperDivisors(m) === n + 1) {
            return [n, m];
        }
    }

    return [];
}
