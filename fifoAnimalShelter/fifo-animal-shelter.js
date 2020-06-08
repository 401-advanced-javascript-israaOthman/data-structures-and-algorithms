'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
  
class AnimalShelter {
  constructor(){
    this.front = null;
    this.rear = null;
  
  }
  
  enqueue(animal){
  
    let newAnimal = new Node(animal);
  
    if(this.front == null){
      this.front = newAnimal;
      this.rear = newAnimal;
    } else {
      this.rear.next = newAnimal;
      this.rear = newAnimal;
    }
    return this;
  }
    
  
  dequeue(pref){
    if(this.front == null){
      return 'empty shelter';
    }
  
    switch(pref) {
    case 'dog' : 
    case 'cat' :
      if(this.front.value == pref){
        var out = this.front.value;
        this.front = this.front.next;
        return out;
      }
      var current = this.front;
      while(current.next){
        if(current.next.value == pref){
          let out = current.next.value;
          if(current.next.next == null){ //if the last node is the one edit the rear
            this.rear = current;
          }
          current.next = current.next.next;
          return out;
        }

        current = current.next;
      }

      return null ;
  
    default:
      return null;
    }
  }
}
  
module.exports = AnimalShelter;