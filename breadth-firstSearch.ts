type Graph = Record<string, string[]>;

let graph: Record<string, string[]> = {};

graph['s'] = ['a', 'b'];
graph['a'] = ['f', 'c'];
graph['b'] = ['c', 'd'];
graph['d'] = ['f'];

function findShortestWayFromAToB(graph: Graph, start: string, end: string) {
  if (start === end) {
    return 'nothing founded';
  }

  let queue = [start];
  const steps: string[] = [];

  while (queue.length) {
    const current = queue.shift()!;
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      steps.push(current, end);
      return steps;
    } else {
      let cur = [...queue];
      let next = graph[current];
      steps.push(current);
      queue = [...cur, ...next];
    }
  }
}

console.log(findShortestWayFromAToB(graph, 's', 'f')); // should return ['s', 'a', 'f']
