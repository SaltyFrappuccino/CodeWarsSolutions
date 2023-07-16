// https://www.codewars.com/kata/64a815e3e96dec077e305750

class PriorityQueue {
    constructor() {
      this.heap = [];
    }
  
    enqueue(item, priority) {
      this.heap.push({ item, priority });
      this.bubbleUp(this.heap.length - 1);
    }
  
    dequeue() {
      const min = this.heap[0];
      const last = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.sinkDown(0);
      }
      return min;
    }
  
    bubbleUp(index) {
      const element = this.heap[index];
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        const parent = this.heap[parentIndex];
        if (element.priority >= parent.priority) break;
        this.heap[parentIndex] = element;
        this.heap[index] = parent;
        index = parentIndex;
      }
    }
  
    sinkDown(index) {
      const length = this.heap.length;
      const element = this.heap[index];
      const elementPriority = element.priority;
      while (true) {
        let minChildIndex = null;
        let minChildPriority = Infinity;
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
  
        if (leftChildIndex < length) {
          const leftChild = this.heap[leftChildIndex];
          if (leftChild.priority < minChildPriority) {
            minChildIndex = leftChildIndex;
            minChildPriority = leftChild.priority;
          }
        }
  
        if (rightChildIndex < length) {
          const rightChild = this.heap[rightChildIndex];
          if (rightChild.priority < minChildPriority) {
            minChildIndex = rightChildIndex;
            minChildPriority = rightChild.priority;
          }
        }
  
        if (minChildIndex === null || elementPriority <= minChildPriority) break;
  
        this.heap[index] = this.heap[minChildIndex];
        this.heap[minChildIndex] = element;
        index = minChildIndex;
      }
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  }
  
  function bridge(islands) {
    const n = islands.length;
    const distances = new Array(n).fill(Infinity);
    const visited = new Array(n).fill(false);
    const pq = new PriorityQueue();
  
    distances[0] = 0;
    pq.enqueue(0, 0);
  
    let totalLength = 0;
  
    while (!pq.isEmpty()) {
      const { item: u } = pq.dequeue();
  
      if (visited[u]) continue;
      visited[u] = true;
  
      totalLength += distances[u];
  
      for (let v = 0; v < n; v++) {
        if (u === v) continue;
        const distance = Math.sqrt(
          Math.pow(islands[u][0] - islands[v][0], 2) +
          Math.pow(islands[u][1] - islands[v][1], 2)
        );
        if (!visited[v] && distance < distances[v]) {
          distances[v] = distance;
          pq.enqueue(v, distance);
        }
      }
    }
  
    return totalLength;
  }  

console.log(bridge([[0, 0], [1, 0], [1, 1]]));