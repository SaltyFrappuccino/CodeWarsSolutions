export function john(n: number): number[] {
    const johnDays = [0];
    const annDays = [1];
    for (let i = 1; i < n; i++) {
        johnDays.push(i - annDays[johnDays[i - 1]]);
        annDays.push(i - johnDays[annDays[i - 1]]);
    }
    return johnDays;
}

export function ann(n: number): number[] {
    const johnDays = [0];
    const annDays = [1];
    for (let i = 1; i < n; i++) {
        johnDays.push(i - annDays[johnDays[i - 1]]);
        annDays.push(i - johnDays[annDays[i - 1]]);
    }
    return annDays;
}

export function sumJohn(n: number): number {
    const johnDays = john(n);
    return johnDays.reduce((sum, k) => sum + k, 0);
}

export function sumAnn(n: number): number {
    const annDays = ann(n);
    return annDays.reduce((sum, k) => sum + k, 0);
}
