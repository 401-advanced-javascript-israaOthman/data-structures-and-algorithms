'use strict';

let Hashmap = require('../../hashtable/hashtable');

describe('Hashmap ',()=>{
  it('Adding a key/value to your hashtable results in the value being in the data structure',()=>{
    let table = new Hashmap(1024);
    table.set('Cat', 'Paghera');
    table.map.forEach( (data, i )=> {
      expect(data.values()).toEqual([ { Cat: 'Paghera' } ]);
    });
  });

  //   it('Retrieving based on a key returns the value stored',()=>{
  //     let table2 = new Hashmap(1024);
  //     table2.set('Cat', 'Paghera');
  //     // console.log(table2.get('Cat'));
  //     expect(table2.get('Cat')).toEqual([ { Cat: 'Paghera' } ]);
  //   });

  //   it('Successfully returns null for a key that does not exist in the hashtable',()=>{
  //     let table2 = new Hashmap(1024);
  //     table2.set('Cat', 'Paghera');
  //     expect(table2.get('Hello')).toBeNull();
  //   });

});
