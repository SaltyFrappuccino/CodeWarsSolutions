// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/typescript

export function sumOfIntervals(intervals: [number, number][]): number {
    intervals.sort((a, b) => a[0] - b[0]);

    let totalLength = 0;
    let currentInterval: [number, number] | null = null;

    for (let i = 0; i < intervals.length; i++) {
      const [start, end] = intervals[i];

      if (currentInterval === null || currentInterval[1] < start) {
        if (currentInterval !== null) {
          totalLength += currentInterval[1] - currentInterval[0];
        }
        currentInterval = [start, end];
      } else {
        currentInterval[1] = Math.max(currentInterval[1], end);
      }
    }

    if (currentInterval !== null) {
      totalLength += currentInterval[1] - currentInterval[0];
    }

    return totalLength;
 }