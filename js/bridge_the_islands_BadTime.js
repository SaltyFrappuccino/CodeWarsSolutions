// https://www.codewars.com/kata/64a815e3e96dec077e305750

function bridge(islands) {
    const n = islands.length;
    const edges = [];
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const distance = Math.sqrt(
          Math.pow(islands[i][0] - islands[j][0], 2) +
          Math.pow(islands[i][1] - islands[j][1], 2)
        );
        edges.push([i, j, distance]);
      }
    }
    edges.sort((a, b) => a[2] - b[2]);
    const parent = Array(n).fill(-1);
    const find = (x) => {
      if (parent[x] === -1) return x;
      return find(parent[x]);
    };
    let totalLength = 0;
    let numEdges = 0;
    for (let i = 0; i < edges.length; i++) {
      const [u, v, distance] = edges[i];
      const parentU = find(u);
      const parentV = find(v);
      if (parentU !== parentV) {
        parent[parentU] = parentV;
        totalLength += distance;
        numEdges++;
        if (numEdges === n - 1) break;
      }
    }

    return totalLength;
  }  

console.log(bridge([[0, 0], [1, 0], [1, 1]]));