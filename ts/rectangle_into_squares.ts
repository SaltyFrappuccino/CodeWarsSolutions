// https://www.codewars.com/kata/55466989aeecab5aac00003e/train/typescript

export const sqInRect = (l: number, w: number): null | number[] => {
    if (l === w) return null;

    const result: number[] = [];
    while (l > 0 && w > 0) {
        const squareSize = Math.min(l, w);
        result.push(squareSize);

        if (l > w) {
            l -= squareSize;
        } else {
            w -= squareSize;
        }
    }

    return result;
};