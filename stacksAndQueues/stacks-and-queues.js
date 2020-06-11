'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.storage = new Array();
    this.top = null ;
  }

  isEmpty(){
    if(this.top == null){
      return true;
    } 
    return false ;
  }

  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.storage.unshift(newNode);
    this.top = newNode;
  }

  pop(){
    if(this.top == null){
      return 'Exception Empty Stack';
    }
    let output = this.storage.shift();
    this.top = this.storage[0];
    return output.value;
  }

  peek(){
    if(this.top == null){
      return 'Exception Empty Stack';
    }
    return this.top.value;
  }

}

class Queue {

  constructor(){
    this.storage = new Array();
    this.front = null;
    this.rear = null;
  }

  isEmpty(){
    if(this.front == null){
      return true;
    } 
    return false ;
  }
  
  enqueue(value){
    let newNode = new Node(value);

    if(this.front == null){
      this.storage.push(newNode);
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.storage.push(newNode);
      this.rear.next = newNode;
      this.rear = newNode;
    }

  }

  dequeue(){
    if(this.front == null){
      return 'Exception Empty Stack';
    }
    let output = this.storage.shift();
    this.front = this.storage[0];
    return output.value;
  }

  peek(){
    if(this.front == null){
      return 'Exception Empty Stack';
    }
    return this.front.value;

  }
}



module.exports= {stack : Stack , queue : Queue , node: Node};