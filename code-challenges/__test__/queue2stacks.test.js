'use strict';

const PseudoQueue = require('../../queueWithStacks/queue-with-stacks');

describe(' PseudoQueue ',()=>{
  
  it('Can successfully enqueue into a queue',()=>{
    let pq = new PseudoQueue();
    pq.enqueue('test1');
    const result =  pq.dequeue();

    expect(result).toEqual('test1');
  });
    
  it('Can successfully enqueue multiple values into a queue',()=>{
    let pq = new PseudoQueue();
    pq.enqueue('test1');
    pq.enqueue('test2');
    pq.enqueue('test3');
    pq.enqueue('test4');

    const result =  pq.dequeue();
    
    expect(result).toEqual('test1');
  });
    
  it('Can successfully dequeue out of a queue the expected value',()=>{
    let pq = new PseudoQueue();
    pq.enqueue('test1');
    pq.enqueue('test2');

    expect(pq.dequeue()).toEqual('test1');
  });
    
  it('Can successfully handel dequeue of an empty queue ',()=>{
    let pq = new PseudoQueue();

    expect(pq.dequeue()).toEqual('Empty Queue');
  });
    
});
  