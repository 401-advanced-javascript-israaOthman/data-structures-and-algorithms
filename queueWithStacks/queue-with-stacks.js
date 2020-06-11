'use strict';

const model = require('../stacksAndQueues/stacks-and-queues');
const Stack = model.stack;

class PseudoQueue {
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value){

    if(this.stack1.top == null ){
      this.stack1.push(value);
      return this.stack1;
    }

    if(this.stack1){
      while(this.stack1.top){
        let out = this.stack1.pop();
        this.stack2.push(out);
      }

      this.stack1.push(value);

      while(this.stack2.top){
        let out = this.stack2.pop();
        this.stack1.push(out);
      }

      return this.stack1;
    }

  }

  dequeue(){
    if(this.stack1.top == null ){
      return 'Empty Queue';
    }
    return this.stack1.pop();
  }
}

module.exports = PseudoQueue;