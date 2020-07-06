'use strict';

function firstWord(str){
  if(!str){
    return 'please enter some text';
  }
  str = str.replace(/,/g, '');
  let words = str.split(' ');
  //   console.log(words);

  for(let i=0; i<words.length;i++){
    let w = words[i].toLowerCase();
    words.splice(i,1);
    if(words.includes(w)){
      return w;
    }
  }  
}

// module.exports=firstWord;

// another solution with Hashmap

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
}

class Hashmap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }
  hash(key) {
    const sumCharCode = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey;
  }
}

function repeatedWords(words){
  let hashmap = new Hashmap(4000);
  let splitted = words.toLowerCase().split(' ');
  let loop = false;
  let idx = 0;
  while(!loop){
    let hashed = hashmap.hash(splitted[idx].split(',')[0]);
    if (!hashmap.storage[hashed]) {
      const ll = new LinkedList();
      ll.prepend({ [hashed]: splitted[idx].split(',')[0] });
      hashmap.storage[hashed] = ll;
      idx++;
    } else {
      loop = true;
    }
  }
  return splitted[idx].split(',')[0];
}


module.exports=repeatedWords;