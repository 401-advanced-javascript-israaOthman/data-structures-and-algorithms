'use strict';

function depthFirst(graph){
  let list = graph._adjancyList;
  let firstNode = list.entries().next().value;

  let stack = [];
  let explored = new Set();

  stack.push(firstNode);
  explored.add(firstNode);

  while (!stack.isEmpty()) {
    let node = stack.pop();

    const neighbors = graph.getNeighbors(node);

    for (let neighbor of neighbors) {

      const neighborNode = neighbor.vertex;

      if (explored.has(neighborNode)) {
        continue;
      } else {
        explored.add(neighborNode);
      }
      stack.push(neighborNode);
    }
  }
  return explored;
}

module.exports=depthFirst;