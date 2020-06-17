'use strict';

const tree = require('../tree');
const BT = tree.BT;


class NumberOfFiles extends BT {
  
  constructor(bt){
    super(bt);
  }

  filesNumber(){
    if(this.tree.root == null){
      return 'Empty tree';
    }

    let  root = this.tree.root;
    let files = 0;
    traversal(root);

    function traversal(node){
        
      if(!node.left && !node.right){
        files++;
      }

      if(node.left){
        traversal(node.left);
      }
      if(node.right){
        traversal(node.right);
      }

    }
    return  files;
  }
}

module.exports=NumberOfFiles;