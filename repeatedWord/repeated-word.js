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

module.exports=firstWord;