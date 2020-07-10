'use strict';

const Hashmap = require('../../hashtable/hashtable');
const leftJoin = require('../../leftJoin/left-join');

let hash1 = new Hashmap(1024);
let hash2 = new Hashmap(1024);

hash1.set('test','synonym');
hash1.set('testt','synonymm');
hash1.set('testtt','synonymmm');
hash1.set('testttt','synonymmmm');


hash2.set('test','antonyms');
hash2.set('testt','antonymss');
hash2.set('testtt','antonymsss');
 
console.log('hash11111111111',hash1);
console.log('hash22222222222',hash2);

describe('left join',()=>{
  
  it('left join',()=>{

    expect(leftJoin(hash1,hash2)).toEqual([['test','synonym','antonyms'],['testttt','synonymmmm','Null'],['testtt','synonymmm','antonymsss'],['testt','synonymm','antonymss']]);
  });
});
  