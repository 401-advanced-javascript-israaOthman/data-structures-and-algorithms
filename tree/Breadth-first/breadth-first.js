'use strict';

const tree = require('../tree');
const BT = tree.BT;


class BridthFirst extends BT {
  
  constructor(bt){
    super(bt);
  }

  breadthFirst(bt){
    if(!bt){
      return 'Empty Tree';
    }
    let q = [];
    let output =[];
    q.push(bt.root);

    while(q){
      let node = q.shift();

      output.push(node);
      if(node && node.left ) q.push(node.left);
      if(node && node.right) q.push(node.right);
    }
    return output;
  }
}

module.exports=BridthFirst;

