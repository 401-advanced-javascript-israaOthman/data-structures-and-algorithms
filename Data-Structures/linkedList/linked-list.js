'use strict';

class Node {

  constructor(value) {
    this.value=value;
    this.next = null;
  }
}



class  LinkedList {

  constructor(){
    
  }

  insert(value){

    let firstNode = new Node(value);

    if(!this.head){
      this.head=firstNode;
      return this;
    }

    firstNode.next = this.head;
    this.head=firstNode;

    return this ; 
  }

  includes(value){

    if(!this.head){
      return false;
    }

    let current = this.head;
    while(current.next){
      if(current.value === value){
        return true;
      }
      current = current.next; //increment the loop
    }
    return false ;
  }

  toString(){
    // "{ a } -> { b } -> { c } -> NULL"
    let current = this.head;
    let str = '' ;
    if(!this.head){
      return 'Empty linked list {}';
    }
    while(current.next){

      str += `{ ${current.value} } -> `;
    
      current = current.next; //increment the loop
    }

    str += `{ ${current.value} } -> NULL`;
    
    return str;
  }

}

module.exports = LinkedList;