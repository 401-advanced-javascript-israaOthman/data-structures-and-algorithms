'use strict';

let LLFromTheEnd = require('../../Data-Structures/ll-kth-from-end/ll-kth-from-end');


describe('ll-kth-from-end ', () => {  
  it('kthFromEnd(k) ', () => {
    let ll = new LLFromTheEnd();
    ll.insert('1');
    console.log(ll);
    expect(ll.kthFromEnd(0)).toEqual('1');
    expect(ll.kthFromEnd(1)).toEqual('Exception -- long number');
    expect(ll.kthFromEnd('hi')).toEqual(' Exception -- not valid number');

    ll.insert('1');
    ll.insert('2');
    ll.insert('3');
    ll.insert('4');
    expect(ll.kthFromEnd(-5)).toEqual(' Exception -- not valid number');
    expect(ll.kthFromEnd(1)).toEqual('1');
    expect(ll.kthFromEnd(9)).toEqual('Exception -- long number');
    expect(ll.kthFromEnd(3)).toEqual('3');
  });
});