'use strict';

const Node = require('../linkedList/node.js');

const LinkedList = require('../linkedList/linked-list.js');


class LinkedListInsertion extends LinkedList {

  append(value){

    let newNode = new Node(value);
     
    if(!this.head){ //if there is no linkedList make the new node as a head
      this.head=newNode;
      return this;
    }
    
    let current = this.head;
    
    while(current.next !== null){ //keep looping untill the end of the LL
      current = current.next;
    }
    current.next = newNode; // when you reach the last node make the new node next of it
    return this;
  }
    
  insertBefore(value, newVal){
    let newNode = new Node(newVal);
    
    if(!this.head){ // if there is no LL return Exeption 
      return 'Exception --- no LinkedList';
    }
    
    if(this.head.value === value){ // if the value equals to the head value make the new node as a head 
      newNode.next = this.head;
      this.head = newNode;
      return this;
    }
    
    
    let current = this.head;
    
    
    while(current.next !== null){ 
      if(current.next.value === value){ // if the value of the next node equals to the (value) 
        newNode.next = current.next; // make the next of the new node to be the next of the current 
        current.next = newNode; // then let the make the current.next is the new node
        return this;
      }else{
        current = current.next; // for the increment
      }
    }
    
    return 'Exception'; // if there is no node with the (value)
  }
    
  insertAfter(value, newVal){
    let newNode = new Node(newVal);
    
    if(!this.head){ // if there is no LL return Exeption 
      return 'Exception';
    }
    
    if(this.head.value === value){ // if the value equals to the head value make the new node next of the head
      newNode.next = this.head.next;
      this.head.next = newNode;
      return this;
    }
    
    let current = this.head.next;
    
    while(current !== null){ 
      if(current.value === value){ 
        newNode.next = current.next;
        current.next = newNode;
        return this;
      } 
      current = current.next; // for the increment
    }
    return 'Exception';
  }
}

module.exports = LinkedListInsertion;