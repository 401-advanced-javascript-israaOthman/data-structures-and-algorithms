'use strict';

const tree = require('../tree');
const BT = tree.BT;


class oddSum extends BT {
  
  constructor(bt){
    super(bt);
  }

  oddSummation(){
    if(this.tree.root == null){
      return 'Empty tree';
    }

    let  root = this.tree.root;
    let sum = 0;
    traversal(root);

    function traversal(node){
      if(typeof node.value == 'number') {
        if(node.value%2 == 1 ){
          sum = sum + node.value;
        }
      }
      if(node.left){
        traversal(node.left);
      }
      if(node.right){
        traversal(node.right);
      }
    }
    return sum;
  }
}

module.exports=oddSum;