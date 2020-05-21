'use strict';

const LinkedList = require('../../Data-Structures/linkedList/linked-list.js');

describe('Linked List',()=>{
  it('1- Can successfully instantiate an empty linked list',()=>{
    let ll = new LinkedList();
    expect(ll.toString()).toEqual('Empty linked list {}');
  });


  it('2- Can properly insert into the linked list' , ()=>{
    let ll = new LinkedList();
    let value = 'test 1';
    ll.insert(value);
    expect(ll.head.value).toEqual(value);      
  });

  it('3- The head property will properly point to the first node in the linked list' , ()=>{
    let ll = new LinkedList();
    let value = 'test 2';
    ll.insert(value);
    expect(ll.head.value).toEqual(value);      
  });

  it('4- Can properly insert multiple nodes into the linked list' , ()=>{
    let ll = new LinkedList();
    let value = 'test 3';
    let value2 = 'test 4';
    let value3 = 'test 5';
    ll.insert(value);
    ll.insert(value2);
    ll.insert(value3);
    expect(ll.toString()).toEqual('{ test 5 } -> { test 4 } -> { test 3 } -> NULL');      
  });

  it('5- Will return true when finding a value within the linked list that exists',()=>{
    let ll = new LinkedList();
    let value = 'test 3';
    let value2 = 'test 4';
    let value3 = 'test 5';
    ll.insert(value);
    ll.insert(value2);
    ll.insert(value3);
    expect(ll.includes('test 4')).toBeTruthy();      
  });

  it('6- Will return false when searching for a value in the linked list that does not exist',()=>{
    let ll = new LinkedList();
    let value = 'test 3';
    let value2 = 'test 4';
    let value3 = 'test 5';
    ll.insert(value);
    ll.insert(value2);
    ll.insert(value3);
    expect(ll.includes('test 9')).toBeFalsy();      
  });

  it('7- Can properly return a collection of all the values that exist in the linked list', ()=>{
    let ll = new LinkedList();
    let value = 'test 3';
    let value2 = 'test 4';
    let value3 = 'test 5';
    ll.insert(value);
    ll.insert(value2);
    ll.insert(value3);
    expect(ll.toString()).toEqual('{ test 5 } -> { test 4 } -> { test 3 } -> NULL');      
  });

});