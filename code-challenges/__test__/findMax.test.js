'use strict';

const treeModel = require('../../tree/tree');
const BT = treeModel.BT;
const BST = treeModel.BST;
const FindMax = require('../../tree/find-maximum-value/findMax');

describe('find-maximum-value ',()=>{
  
  it('Can successfully find the maximum in a tree',()=>{
    let tree = new BST();
    tree.add(5);
    tree.add(2);
    tree.add(8);
    let secTree = new FindMax(tree);
    expect(secTree.findMaximumValue()).toEqual(8);
  });

  it('Can successfully  handel the edge case ',()=>{
    let tree = new BST();
    let test = new FindMax(tree);
    expect(test.findMaximumValue()).toEqual('Empty tree');
  });
});
