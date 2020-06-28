'use strict';

const treeModel = require('../../tree/tree');

const BST = treeModel.BST;
const oddSum = require('../../tree/sum/summation');

describe('find-maximum-value ',()=>{
  
  it('Can successfully find the summation of the odd numbers in a tree',()=>{
    let tree = new BST();
    tree.add(5);
    tree.add(2);
    tree.add(1);
    tree.add(8);
    tree.add(3);
    let secTree = new oddSum(tree);
    expect(secTree.oddSummation()).toEqual(9);
  });

  it('Can successfully  handel the edge case ',()=>{
    let tree = new BST();
    let test = new oddSum(tree);
    expect(test.oddSummation()).toEqual('Empty tree');
  });
});
