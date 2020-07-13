'use strict';

function getEdge (graph,array){
  let cost = 0;

  for(let i=0; i<array.length-1 ; i++){
    let neighbors = graph.getNeighbors(array[i]);
    neighbors.forEach(val=>{
      if(val.vertex.value === array[i+1]){
        cost = cost + val.weight;
      }
    });
  }
  if(cost>0){
    return `True ${cost}$`;
  }else{
    return `False ${cost}$`;
  }
}

module.exports=getEdge;