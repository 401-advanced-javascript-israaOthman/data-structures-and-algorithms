'use strict';

function tree_intersection(tree1,tree2){
  if(!(tree1&&tree2)){
    return 'empty tree';
  }

  let result =[];

  let root1 = tree1.root;
  traversal(root1);
  function traversal(node){
    let nodeValue = node.value;

    let root2=tree2.root;
    
    secTraversal(root2);
    function secTraversal(node2){
      if(node2.value == nodeValue){
        result.push(nodeValue);
      }
      console.log('******************',node2.left);
      console.log(result);
      if(node2.left){
        secTraversal(node2.left);
      }
      if(node2.right){
        secTraversal(node2.rigth);
      }   
    }

    if(node.left){
      traversal(node.left);
    }
    if(node.right){
      traversal(node.rigth);
    }   
  }
  return result;
}

module.exports=tree_intersection;