'use strict';

const FizzBuzzTree = require('../../tree/fizzBuzzTree/fizz-buzz-tree');
const treeModel = require('../../tree/tree');

const BST = treeModel.BST;

let tree = new BST();
tree.add(5);
tree.add(1);
tree.add(2);
tree.add(6);
tree.add(15);
tree.add(9);


let copy = { ...tree };
FizzBuzzTree(copy);

describe('fizz buzz tree',()=>{

  it('will return err msg if the tree is null',()=>{
    let emptyTree = new BST();
    expect(FizzBuzzTree(emptyTree)).toEqual('Empty tree');
  });

  it('the rout(5) value should be Buzz in the copied tree',()=>{
    expect(copy.root.value).toEqual('Buzz');
  });

  it('the left(1) node after the rout should be 1 in the copied tree',()=>{
    expect(copy.root.left.value).toEqual('1');
  });

  it('the right(6) node after the rout should be Fizz in the copied tree',()=>{
    expect(copy.root.right.value).toEqual('Fizz');
  }); 

  it('the right right(15) node after the rout should be FizzBuzz in the copied tree',()=>{
    expect(copy.root.right.right.value).toEqual('FizzBuzz');
  });

});


