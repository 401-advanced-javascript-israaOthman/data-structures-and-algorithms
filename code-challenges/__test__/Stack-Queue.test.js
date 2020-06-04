'use strict';

const model = require('../../stacksAndQueues/stacks-and-queues');

const Stack = model.stack;
const Queue = model.queue;

describe('Stack and Queue model',()=>{
  
  it('Can successfully push onto a stack',()=>{
    let newStack = new Stack();
    newStack.push('test1');
    expect(newStack.peek()).toEqual('test1');
  });

  it('Can successfully push multiple values onto a stack',()=>{
    let newStack = new Stack();
    newStack.push('test1');
    newStack.push('test2');
    newStack.push('test3');
    newStack.push('test4');

    expect(newStack.peek()).toEqual('test4');
  });

  it('Can successfully pop off the stack',()=>{
    let newStack = new Stack();
    newStack.push('test2');
    newStack.push('test3');
    newStack.push('test4');
    expect(newStack.pop()).toEqual('test4');
  });

  it('Can successfully empty a stack after multiple pops',()=>{
    let newStack = new Stack();
    newStack.push('test2');
    newStack.push('test3');
    newStack.push('test4');
    newStack.pop();
    newStack.pop();
    newStack.pop();
    expect(newStack.isEmpty).toBeTruthy();
  });

  it('Can successfully peek the next item on the stack',()=>{
    let newStack = new Stack();
    newStack.push('test1');
    newStack.push('test2');
    newStack.push('test3');

    expect(newStack.peek()).toEqual('test3');
  });

  it('Can successfully instantiate an empty stack',()=>{
    let newStack = new Stack();
    expect(newStack.top).toBe(null);
  });
 
  it('Calling pop or peek on empty stack raises exception',()=>{
    let newStack = new Stack();
    expect(newStack.pop()).toEqual('Exception Empty Stack');
  });

  //=========================================================


  it('Can successfully enqueue into a queue',()=>{
    let newqueue = new Queue();
    newqueue.enqueue('test1');
    expect(newqueue.peek()).toEqual('test1');
  });

  it('Can successfully enqueue multiple values into a queue',()=>{
    let newQueue = new Queue();
    newQueue.enqueue('test1');
    newQueue.enqueue('test2');
    newQueue.enqueue('test3');
    newQueue.enqueue('test4');

    expect(newQueue.peek()).toEqual('test1');
  });

  it('Can successfully dequeue out of a queue the expected value',()=>{
    let newQueue = new Queue();
    newQueue.enqueue('test1');
    newQueue.enqueue('test2');
    newQueue.enqueue('test3');
    newQueue.enqueue('test4');

    expect(newQueue.dequeue()).toEqual('test1');
  });
  
  it('Can successfully peek into a queue, seeing the expected value',()=>{
    let newQueue = new Queue();
    newQueue.enqueue('test1');
    newQueue.enqueue('test2');

    expect(newQueue.peek()).toEqual('test1');
  });

  it('Can successfully dequeue out of a queue the expected value',()=>{
    let newQueue = new Queue();
    newQueue.enqueue('test1');
    newQueue.enqueue('test2');
    newQueue.enqueue('test3');
    newQueue.enqueue('test4');
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();

    expect(newQueue.isEmpty).toBeTruthy();
  });
  
  it('Can successfully instantiate an empty queue',()=>{
    let newQueue = new Queue();
    expect(newQueue.front).toBe(null);
  });

  it('Calling dequeue or peek on empty queue raises exception',()=>{
    let newQueue = new Queue();
    expect(newQueue.dequeue()).toEqual('Exception Empty Stack')
  });
  

});
