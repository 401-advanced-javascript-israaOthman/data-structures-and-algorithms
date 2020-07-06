const treeModel = require('../../tree/tree');
const BST = treeModel.BST;
const tree_intersection = require('../../treeIntersection/tree-intersection');

describe('tree_intersection ',()=>{
  it('equla trees',()=>{
    let tree1 = new BST();
    tree1.add(5);
    tree1.add(2);
    tree1.add(8);
    let tree2 = new BST();
    tree2.add(5);
    tree2.add(2);
    tree2.add(8);
    expect(tree_intersection(tree1,tree2)).toEqual([5,2,8]);    
  });
});
