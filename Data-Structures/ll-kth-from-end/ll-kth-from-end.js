'use strict';


const LinkedList = require('../linkedList/linked-list.js');


class LLFromTheEnd extends LinkedList {

  kthFromEnd(k){
    if(typeof(k) !== 'number' || k < 0){
      return ' Exception -- not valid number';
    }

    if(!this.head){
      return 'No LinkedList';
    }
        
    let current = this.head;
    let ll_length=0 ;

    while(current){
      ll_length = ll_length +1;
      current = current.next;
    }

    let round = ll_length - k -1;
    if(round < 0 ){
      return 'Exception -- long number';
    } 

    current=this.head;

   
    while(round){
      current = current.next;
      round --;
    }
    return current.value;
  }
}


module.exports =LLFromTheEnd;