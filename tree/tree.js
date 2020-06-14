'use strict';

class Node {
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
  }
}


class BinaryTree {
  constructor(tree){
    this.tree = tree;
  }

  preOrder(){
    // node - left - right 
    if(this.tree.root == null){
      return 'Empty tree';
    }
    let  root = this.tree.root;
    let visited = [];
    function traversal(node){
      visited.push(node.value);
      if(node.left){
        traversal(node.left);
      }
      if(node.right){
        traversal(node.right);
      }
    }
    traversal(root);
    return visited;
  }
  
  inOrder(){
    // left - node - right  
    if(this.tree.root == null){
      return 'Empty tree';
    }
    let  root = this.tree.root;
    let visited = [];
    function traversal(node){
      if(node.left){
        traversal(node.left);
      }
      visited.push(node.value);
      if(node.right){
        traversal(node.right);
      }
    }
    traversal(root);
    return visited;
  }

  postOrder(){
    // left - right - node  
    if(this.tree.root == null){
      return 'Empty tree';
    }
    let  root = this.tree.root;
    let visited = [];
    function traversal(node){
      if(node.left){
        traversal(node.left);
      }
      if(node.right){
        traversal(node.right);
      }
      visited.push(node.value);
    }
    traversal(root);
    return visited;
  }
}

class BinarySearchTree{
  constructor(){
    this.root=null;
  }
  add(value){
    if(typeof value != 'number'){
      return 'the value should be number';
    }
    if(this.root == null){
      this.root = new Node(value);
      return this;
    }

    return  traversal(this.root);

    function traversal(node){
      if(value<node.value){
        if(node.left == null){
          node.left = new Node(value);
          return this;
        }else {
          return traversal(node.left);
        }
      }else if(value>node.value){
        if(node.right == null){
          node.right = new Node(value);
          return this;
        }else {
          return traversal(node.right);
        }
      }else {
        return 'this node is already exist';
      }
    }
  }

  contains(value){
    if(typeof value != 'number'){
      return 'the value should be number';
    }
    if(this.root == null ){
      return 'Empty tree';
    }
    let node = this.root;
    while(node != null){
      if(value == node.value){
        return true;
      }else if(value< node.value){
        node=node.left;
      } else  if(value> node.value){
        node = node.right;
      }
    }
    return false;
  }
}

module.exports = {BT:BinaryTree, BST:BinarySearchTree};