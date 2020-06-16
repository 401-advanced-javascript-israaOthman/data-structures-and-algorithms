'use strict';

const shelter = require('../../fifoAnimalShelter/fifo-animal-shelter');

describe('fifo-animal-shelter',()=>{

  it('Can successfully enqueue into a shelter queue',()=>{
    let newShelter= new shelter();
    newShelter.enqueue('dog');
    expect(newShelter.front.value).toEqual('dog');
  });
    
  it('Can successfully enqueue multiple values into a queue',()=>{
    let newShelter= new shelter();
    newShelter.enqueue('dog');
    newShelter.enqueue('cat');
    newShelter.enqueue('dog');
    newShelter.enqueue('cat');

    expect(newShelter.front.value).toEqual('dog');
  });
    
  it('Can successfully dequeue out of a queue the expected value dog or cat',()=>{
    let newShelter= new shelter();
    newShelter.enqueue('dog');
    newShelter.enqueue('cat');
    newShelter.enqueue('dog');
    newShelter.enqueue('cat');

    expect(newShelter.dequeue('cat')).toEqual('cat');
  });

            
  it('Calling dequeue with not (dog/cat ) argument will return null',()=>{
    let newShelter= new shelter();
    newShelter.enqueue('cat');
    newShelter.enqueue('dog');
    expect(newShelter.dequeue('test')).toBeNull();
  });

  it('Calling dequeue on empty queue raises exception',()=>{
    let newShelter= new shelter();
    expect(newShelter.dequeue('cat')).toEqual('empty shelter');
  });
      

});
