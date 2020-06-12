'use strict';

const treeModel = require('../../tree/tree');
const BT = treeModel.BT;
const BST = treeModel.BST;

describe('Binary Search Tree ',()=>{
  
  it('Can successfully instantiate an empty tree',()=>{
    let emptyTree = new BST();
    expect(emptyTree.root).toBeNull();
  });

  it('Can successfully instantiate a tree with a single root node',()=>{
    let tree = new BST();
    tree.add(1);
    expect(tree.root.value).toEqual(1);
  });

  it('Can successfully add a left child and right child to a single root node',()=>{
    let tree = new BST();
    tree.add(5);
    tree.add(2);
    tree.add(8);
    expect(tree.root.value).toEqual(5);
    expect(tree.root.left.value).toEqual(2);
    expect(tree.root.right.value).toEqual(8);

  });

  it('Can successfully  return a collection from a preorder traversal',()=>{
    let tree = new BST();
    tree.add(5);
    tree.add(2);
    tree.add(8);
    let coll = new BT(tree);
    expect(coll.preOrder()).toEqual([5,2,8]);
  });

  it('Can successfully return a collection from an inorder traversal',()=>{
    let tree = new BST();
    tree.add(5);
    tree.add(2);
    tree.add(8);
    let coll = new BT(tree);
    expect(coll.inOrder()).toEqual([2,5,8]);
  });

  it('Can successfully  return a collection from a postorder traversal',()=>{

    let tree = new BST();
    tree.add(5);
    tree.add(2);
    tree.add(8);
    let coll = new BT(tree);
    expect(coll.postOrder()).toEqual([2,8,5]);
  });

  it('Can successfully  return a true if the tree has the value',()=>{

    let tree = new BST();
    tree.add(5);
    tree.add(2);
    tree.add(8);
 
    expect(tree.contains(8)).toBeTruthy();
  });

  
  it('Can successfully  return a false if the tree does not have the value',()=>{

    let tree = new BST();
    tree.add(5);
    tree.add(2);
    tree.add(8);
 
    expect(tree.contains(6)).toBeFalsy();
  });

  it('Can successfully  handel the edge cases ',()=>{
    let tree = new BST();
    let coll = new BT(tree);
    expect(tree.contains(6)).toEqual('Empty tree');
    expect(coll.preOrder()).toEqual('Empty tree');

  });

  it('Can successfully handel the if the node is exist',()=>{

    let tree = new BST();
    tree.add(5);
    tree.add(2);
    tree.add(8);
 
    expect(tree.add(8)).toEqual('this node is already exist');
  });

});