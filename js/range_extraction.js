// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/java

function solution(list) {
    return list.reduce((acc, num, i) => {
      if (i === 0 || num !== list[i - 1] + 1) acc.push([num]);
      else acc[acc.length - 1].push(num);
      return acc;
    }, []).map(group => group.length > 2 ? `${group[0]}-${group.at(-1)}` : group.join(',')).join(',');
  }
