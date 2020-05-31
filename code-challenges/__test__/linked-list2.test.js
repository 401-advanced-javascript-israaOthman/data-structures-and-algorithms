'use strict';

const LinkedList = require('../../Data-Structures/linkedList/linked-list.js');

describe('LinkedList Insertion',()=>{
  it('1- Can successfully add a node to the end of the linked list',()=>{
    let ll = new LinkedList();
    let value = 'test 1';
    ll.insert(value);
    let endValue = 'test End';
    ll.append(endValue);
    let current = ll.head;
    while(current.next !== null){
      current = current.next;
    }
    expect(current.value).toEqual(endValue);
  });


  it('2- Can successfully add multiple nodes to the end of a linked list' , ()=>{
    let ll = new LinkedList();
    let value = 'test 1';
    ll.append(value);
    let secValue = 'sec test';
    ll.append(secValue);
    let endValue = 'test End';
    ll.append(endValue);
    let current = ll.head;
    while(current.next !== null){
      current = current.next;
    }
    expect(current.value).toEqual(endValue);   
  });

  it('3- Can successfully insert a node before a node located i the middle of a linked list' , ()=>{
    let ll = new LinkedList();
    let value = '1';
    ll.append(value);
    let secValue = '2';
    ll.append(secValue);
    let endValue = '3';
    ll.append(endValue);

    let newVal = '8';
    ll.insertBefore(secValue, newVal);

    let current = ll.head;
    while(current.next){
      if(current.next.value === secValue){
        expect(current.value).toEqual(newVal);  
      }
      current = current.next;
    }
  });

  it('4- Can successfully insert a node before the first node of a linked list' , ()=>{
    let ll = new LinkedList();
    let value = '1';
    ll.append(value);
    let secValue = '2';
    ll.append(secValue);
    let endValue = '3';
    ll.append(endValue);

    let newVal = '8';
    ll.insertBefore(value, newVal);

    expect(ll.head.value).toEqual(newVal);  
  });

  it('5- Can successfully insert after a node in the middle of the linked list',()=>{
    let ll = new LinkedList();
    let value = '1';
    ll.append(value);
    let secValue = '2';
    ll.append(secValue);
    let endValue = '3';
    ll.append(endValue);

    let newVal = '8';
    ll.insertAfter(secValue, newVal);

    let current = ll.head;
    while(current){
      if(current.value === secValue){
        expect(current.next.value).toEqual(newVal);  
      }
      current = current.next;
    }
  });

  it('6- Can successfully insert a node after the last node of the linked list',()=>{
    let ll = new LinkedList();
    let value = '1';
    ll.append(value);
    let secValue = '2';
    ll.append(secValue);
    let endValue = '3';
    ll.append(endValue);

    let newVal = '8';
    ll.insertAfter(endValue, newVal);

    let current = ll.head;
    while(current){
      if(current.value === endValue){
        expect(current.next.value).toEqual(newVal);  
      }
      current = current.next;
    }
  });

});