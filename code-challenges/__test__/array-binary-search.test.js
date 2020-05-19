'use strict';

const BinarySearch = require('../arrayBinarySearch/array-binary-search');

describe('Array Binary Search ',()=>{
  it('pass an array and a key -- if the key in the array will return the index of it',()=>{
    expect(BinarySearch([4,8,15,16,23,42], 15)).toEqual(2);
  });

  it('pass an array and a key -- if the key is not in the array will return the -1',()=>{
    expect(BinarySearch([11,22,33,44,55,66,77], 90)).toEqual(-1);
  });
});