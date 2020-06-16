'use strict';

const tree = require('../tree');
const BT = tree.BT;


class FindMaximum extends BT {
  
  constructor(bt){
    super(bt);
  }

  findMaximumValue(){
    if(this.tree.root == null){
      return 'Empty tree';
    }

    let  root = this.tree.root;
    let max = 0;
    traversal(root);

    function traversal(node){
      if(typeof node.value == 'number') {
        if(node.value > max){
          max=node.value;
        }
      }
      if(node.left){
        traversal(node.left);
      }
      if(node.right){
        traversal(node.right);
      }
    }
    return max;
  }
}

module.exports=FindMaximum;